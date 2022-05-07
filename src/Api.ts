import { setAPIVersion } from './decorators/apiVersion';

@setAPIVersion('2.0.0')
class API {}

console.log(new API());
