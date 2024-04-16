export class C {
    #x = 0;
    get x() {return this.#x++;}
}
//なんで通るのか謎すぎる
//#つけないとインクリメントされずに通らないのよく分からない。
