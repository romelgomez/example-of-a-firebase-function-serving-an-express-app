import { compile } from 'handlebars';
import { getFile } from '../utils/get-file.utils';

const getIndex = (fileName: string, context: any) => {

  return getFile(fileName, '/src/views')
    .then((source) => {
      
      const template = compile(source.toString());

      return Promise.resolve(template(context));

    });

}

export {
  getIndex
}
