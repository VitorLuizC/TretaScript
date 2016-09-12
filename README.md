# TretaScript
TretaScript é um projeto que testa e implementa formas de fazer bundles de TypeScript sem destruir toda a aplicação legado da empresa.

## História
Fui atualizar os scripts de um sistema legado pra serem mais modulares e vi uma oportunidade de testar a linguagem fantástica que é o TypeScript. Porém perdi dias configurando um bundler que atendesse algumas diretivas:

- Manter a estrutura de pastas;
- Separar os arquivos TypeScript dos arquivos compilados;
- Aceitar plugins e libs de terceiros (infelizmente jQuery);

Bom, a _treta_ pra fazer isso foi bem grande, perdi alguns dias mas consegui chegar a uma opção interessante com Webpack + Gulp.

1. Pra ver a mágica instale os módulos(são poucos) com o npm na raiz do projeto:
```cd [raiz]```
```npm install```

2. Instale o **Gulp** globalmente:
```npm install gulp --global```

3. BIRRRRRRRRRRRRRL!
```gulp build```
