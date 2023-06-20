export namespace Animals {
  export class Add {
    static readonly type = '[Zoo] Add Animal';
  
    constructor(public name: string) {}
  }

}
