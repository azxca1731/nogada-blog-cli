const app = require('commander');
const makePost = require('./makePost');

app
  .command('post <title>')
  .description('포스트 형식을 만들어준다.')
  .on('--help', () => {
      console.log('이 명령어는 기본적으로 블로그 절대경로에서 사용해주세요')
  })
  .action(title => {
    console.log(`make post name is ${title}`);
    makePost({
      title
    });
  });


  app.parse(process.argv);