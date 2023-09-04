export default class Queue<T> {
    private _elems: T[] = [];
  
    push(elem: T):void {
      this._elems.push(elem);
    }
  
    pop():T{
      return this._elems.shift();
    }
  
    get elems(): T[] {
      return this._elems;
    }
  }
  