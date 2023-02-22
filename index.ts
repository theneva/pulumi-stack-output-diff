import { CustomResource, Resource } from '@pulumi/pulumi';

class Taxi extends Resource {
  readonly size = 'big';
  readonly color = 'yellow';

  constructor() {
    super('some:demo:Taxi', 'taxi', false);
  }
}

class Vehicles extends Resource {
  readonly taxi = new Taxi();

  constructor() {
    super('some:demo:Vehicles', 'vehicles', false);
  }
}

export const vehicles = new Vehicles();
