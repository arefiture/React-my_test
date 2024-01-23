with num as ( --������������������ ��� ���� ����� (�� 1 �� 5)
	select 1 as id
	union all
	select id + 1 from num where id < 5
), nameLine as ( --������������ ��������������� ��������
	select case 
		when pv.Value like '%����� ����������������%' then 1
		when pv.Value like'%���������%' then 2
		when pv.Value like '%������%' then 3
		when pv.Value like '%���������� �����������%' then 4
		when p.Code = 'Autodonation' then 5 end as id,
		pv.DocumentGUID as Guid
	from oms_ParamValue pv
	join oms_Param p on pv.rf_ParamID = p.ParamID 
	where p.Code = 'NameComponentDonorBlood' and (
				pv.Value like '%����� ����������������%'
			or 	pv.Value like'%���������%'
			or 	pv.Value like '%������%'
			or 	pv.Value like '%���������� �����������%'
		) or p.Code = 'Autodonation' and pv.Value like '%��%'
),coHe as ( -- ���������� (��)
	select pv.ParamValueID, pv.DocumentGUID as Guid, 
		case when (pv.Value != '��� ����������') then 1 else 0 end cou
	from oms_ParamValue pv
	join oms_Param p on pv.rf_ParamID = p.ParamID 
	where p.Code = 'ComplicationHemotransfusion'
), volTBlood as ( -- ������� ����������� (� ������)
	select pv.ParamValueID, pv.DocumentGUID as Guid, cast(pv.Value / 1000.0 as decimal(15, 3)) as value
	from oms_ParamValue pv
	join oms_Param p on pv.rf_ParamID = p.ParamID 
	where p.Code = 'VolumeTransfusedBlood'
		and pv.Value like '%[0-9]%'
)
select case n.id
			when 1 then '���������������� �����'
			when 2 then '������������������� �����'
			when 3 then '������ ���� �����'
			when 4 then '���������� �����������'
			when 5 then '������������������' 
		end as name,
			n.id, isNull(v.cPatient, 0) as cPatient, isNull(v.cTemplate, 0) as cTemplate, 
			isNull(v.cVol, 0) as cVol, isNull(v.cOsl, 0) as cOsl
from num n
left join (
	select nl.id, count(DISTINCT mr.rf_PatientId) as cPatient, count(t.TemplateID) as cTemplate,
		sum(vtb.value) as cVol, sum(ch.cou) as cOsl
	from ehr_Template t -- ��� ����� ������ �������
	join ehr_MedRecord mr on t.TemplateID = mr.rf_TemplateID -- ��� ��������� 
	join nameLine nl on mr.Guid = nl.Guid
	left join coHe ch on mr.Guid = ch.Guid -- ��� ������������ � � ������� join'�� �� �� ����. �� ������ ������� LEFT
	join volTBlood vtb on mr.Guid = vtb.Guid -- ���� � ���, � ��������, ���� �����...
	where mr.CreateDate BETWEEN '@Period.BeginDate' and '@Period.EndDate'
	GROUP BY nl.id
) v on n.id = v.id