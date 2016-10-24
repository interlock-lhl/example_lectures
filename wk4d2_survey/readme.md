select
	S.id,
	S.github_username,
	COUNT(*) as t,
	COUNT(CASE WHEN QO.is_correct THEN 1 END) as a,
	( CAST(COUNT(CASE WHEN QO.is_correct THEN 1 END) AS float) / CAST(COUNT(*) AS float) ) as mark
FROM submissions AS S
left join submission_answers AS SA ON SA.submission_id=S.id
left join question_options AS QO on QO.id=SA.question_option_id
left join questions AS Q on Q.id=QO.question_id
group by S.id, S.github_username;
