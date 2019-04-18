import fs from 'fs';
import axios from 'axios';

const sync = async () => {
  try {
    const url = process.env.API_URL + '/models';
    const models = (await axios.get(url)).data;
    const isDirectoryModelsExist = fs.existsSync('./assets');

    if (!isDirectoryModelsExist) {
      fs.mkdirSync('./assets')
    }

    fs.writeFileSync('assets/methods.json', JSON.stringify(models))
  } catch (e) {
    console.log('ERROR : ', e);
  }

}

sync()
