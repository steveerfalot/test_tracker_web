import { ModuleStep } from '../components/module-step/module-step';
export class Module {
  constructor(public id: number,
              public name: string,
  public steps: Array<ModuleStep>) {
  }
}
