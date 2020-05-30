import { readFile } from 'fs';
import { join } from 'path';

const getFile = (fileName: string, basePath: string) => {

    return new Promise<Buffer>((resolve, reject) => {
        readFile(join(process.cwd(), basePath, fileName), function (error: NodeJS.ErrnoException | null, data: Buffer) {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

export {
    getFile
}
