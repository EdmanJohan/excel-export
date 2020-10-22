Package.describe({
  name: 'nicolaslopezj:excel-export',
  summary: 'Export data to excel',
  version: '1.0.2',
  git: 'https://github.com/EdmanJohan/excel-export'
});

Npm.depends({
  'excel-export-next': '0.4.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use(['underscore'], 'server');
  api.addFiles(['lib.js', 'excel.js'], 'server');

  api.export('Excel', 'server');
});
