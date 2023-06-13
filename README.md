# openimis-fe-nepal_language_pack_js
openIMIS translation to Nepali and English version of Nepal implementation.

To install locally, please follow steps from this [link](https://github.com/openimis/openimis-fe_js#managing-translationslocalization).

SQL code example (Assuming, there are 2 languages in the system at the moment.)
``` SQL
INSERT INTO tblLanguages ("LanguageCode", "LanguageName", "SortOrder") VALUES ('np', 'Nepali', 3);
```

If you want to overwrite english version you do not have to add anything else.