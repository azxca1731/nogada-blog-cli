const fs = require('fs');

const getDate = () => {
  const date = new Date;
  return date.toISOString();
}

const makePost = title => {
  let message='';
  message+='---\n';
  message+=`title: "${title}"\n`;
  message+=`date: "${getDate()}"\n`;
  message+='layout: post\n';
  message+=`path: "/${title}/"\n`;
  message+=`description: "fill this Desc!"\n`;
  message+='category: Defaults\n';
  message+='tags:\n';
  message+='-default\n';
  message+='---\n';
  return message;
}

module.exports = ({title}) => {
  fs.mkdirSync(`./content/posts/${title}`);
  fs.writeFileSync(`./content/posts/${title}/index.md`, makePost(title));
};