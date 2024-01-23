with num as ( --Последовательность для всех строк (от 1 до 5)
	select 1 as id
	union all
	select id + 1 from num where id < 5
), nameLine as ( --Наименования трансфузионного средства
	select case 
		when pv.Value like '%Кровь консервированная%' then 1
		when pv.Value like'%эритроцит%' then 2
		when pv.Value like '%плазма%' then 3
		when pv.Value like '%Концентрат тромбоцитов%' then 4
		when p.Code = 'Autodonation' then 5 end as id,
		pv.DocumentGUID as Guid
	from oms_ParamValue pv
	join oms_Param p on pv.rf_ParamID = p.ParamID 
	where p.Code = 'NameComponentDonorBlood' and (
				pv.Value like '%Кровь консервированная%'
			or 	pv.Value like'%эритроцит%'
			or 	pv.Value like '%плазма%'
			or 	pv.Value like '%Концентрат тромбоцитов%'
		) or p.Code = 'Autodonation' and pv.Value like '%да%'
),coHe as ( -- Осложнения (ед)
	select pv.ParamValueID, pv.DocumentGUID as Guid, 
		case when (pv.Value != 'Без осложнений') then 1 else 0 end cou
	from oms_ParamValue pv
	join oms_Param p on pv.rf_ParamID = p.ParamID 
	where p.Code = 'ComplicationHemotransfusion'
), volTBlood as ( -- Сколько переливаний (в литрах)
	select pv.ParamValueID, pv.DocumentGUID as Guid, cast(pv.Value / 1000.0 as decimal(15, 3)) as value
	from oms_ParamValue pv
	join oms_Param p on pv.rf_ParamID = p.ParamID 
	where p.Code = 'VolumeTransfusedBlood'
		and pv.Value like '%[0-9]%'
)
select case n.id
			when 1 then 'Консервированная кровь'
			when 2 then 'Эритроцитсодержащие среды'
			when 3 then 'Плазма всех видов'
			when 4 then 'Концентрат тромбоцитов'
			when 5 then 'Аутогемотрансфузии' 
		end as name,
			n.id, isNull(v.cPatient, 0) as cPatient, isNull(v.cTemplate, 0) as cTemplate, 
			isNull(v.cVol, 0) as cVol, isNull(v.cOsl, 0) as cOsl
from num n
left join (
	select nl.id, count(DISTINCT mr.rf_PatientId) as cPatient, count(t.TemplateID) as cTemplate,
		sum(vtb.value) as cVol, sum(ch.cou) as cOsl
	from ehr_Template t -- Тут можно заявки считать
	join ehr_MedRecord mr on t.TemplateID = mr.rf_TemplateID -- Для пациентов 
	join nameLine nl on mr.Guid = nl.Guid
	left join coHe ch on mr.Guid = ch.Guid -- При тестировании и с обычным join'ом всё ок было. На всякий оставил LEFT
	join volTBlood vtb on mr.Guid = vtb.Guid -- Хотя и тут, в принципе, тоже можно...
	where mr.CreateDate BETWEEN '@Period.BeginDate' and '@Period.EndDate'
	GROUP BY nl.id
) v on n.id = v.id