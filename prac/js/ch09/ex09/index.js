//参考：https://qiita.com/baby-degu/items/d058a62f145235a0f007
//S (Single Responsibility)　単一責任の原則
//この原則は、変更の結果としてバグが発生しても、他の無関係な動作に影響を与えないように、動作を分離することを目的としています。
class Vehicle{
    drive(){}
    refueling(){}
    charge(){}
    fly(){}
    carry(){}
}