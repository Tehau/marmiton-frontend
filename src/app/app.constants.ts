class AppConstant {

	private listUnity: Array<string>

	constructor(){
		this.listUnity = ['mL','g','c à café','c à soupe'];
	}

	public get getListUnity() : Array<string>{
		return this.listUnity;
	}

}
export var appConstant = new AppConstant();
