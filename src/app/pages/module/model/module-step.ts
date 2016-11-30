import { Module } from './module';
import { Step } from '../../step/model/step';
export class ModuleStep {
  constructor(public id: number,
              public position: number,
              public module: Module,
              public step: Step) {
  }
}
