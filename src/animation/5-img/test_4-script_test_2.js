(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"test 4_script test_2_atlas_", frames: [[0,1002,1000,1000],[1002,0,1000,1000],[0,0,1000,1000]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.gigl = function() {
	this.spriteSheet = ss["test 4_script test_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hello = function() {
	this.spriteSheet = ss["test 4_script test_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.m = function() {
	this.spriteSheet = ss["test 4_script test_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hello();
	this.instance.parent = this;
	this.instance.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m();
	this.instance.parent = this;
	this.instance.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gigl();
	this.instance.parent = this;
	this.instance.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-500,1000,1000);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F53E4F").s().p("AgwAxQgUgVAAgcQAAgbAUgVQAVgUAbAAQAdAAATAUQAVAVAAAbQAAAcgVAVQgTAUgdAAQgbAAgVgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.9,13.8,13.8);


// stage content:
(lib.test4scripttest_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_76 = function() {
		this.gotoAndPlay(32);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(1));

	// Слой 4
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(387.3,360.7,0.29,0.29);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.57,scaleY:1.57,x:387.5,y:361.1},3).wait(1).to({regX:0,regY:0,scaleX:1.16,scaleY:1.16,x:387.2,y:361.8},0).wait(1).to({scaleX:1,scaleY:1,x:387.3,y:362.2},0).wait(62));

	// girl
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(388,312,0.223,0.223,0,0,0,37.9,-37.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regX:38.1,scaleX:1.23,scaleY:1.23,x:388.2,y:312.1},4).to({regX:38,regY:-38,scaleX:1,scaleY:1,x:388,y:312},2).wait(67));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("ATuZ2QimilAAjrQAAjqCmimQCmimDqAAQDrAAClCmQCmCmAADqQAADrimClQilCmjrAAQjqAAimimgAUCNqQidCeAADeQAADfCdCdQCeCeDeAAQDeAACeieQCdidAAjfQAAjeidieQieidjeAAQjeAAieCdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:222.8,y:182}).wait(66));

	// ring
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(1,1,1).p("AF/gaQAAAagCAbIr7g1g");
	this.shape.setTransform(385.8,345.7,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F53E4F").s().p("Al+gaIL9AAQAAAagCAbg");
	this.shape_1.setTransform(385.8,345.7,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(1,1,1).p("AF/kZQAACghCCTQhCCVh3BrIoCozg");
	this.shape_2.setTransform(360.3,345.7,1,1,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F53E4F").s().p("Al+kZIL9AAQAACghCCTQhCCVh3Brg");
	this.shape_3.setTransform(360.3,345.7,1,1,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#444444").ss(1,1,1).p("AJ0l9QAAEujQDcQjRDekuASQkvASjpjDIHrpJg");
	this.shape_4.setTransform(350.3,321.2,1,1,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F53E4F").s().p("ApzDMIHrpJIL8AAQAAEujQDcQjRDekuASQgZABgZAAQkQAAjWiyg");
	this.shape_5.setTransform(350.3,321.2,1,1,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#444444").ss(1,1,1).p("AL8l+QAAE2jYDdQjYDfk0AKQkzAKjmjQQjmjPgUk3IL7gwg");
	this.shape_6.setTransform(350.2,307.6,1,1,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F53E4F").s().p("AoBC4QjmjPgUk3IL7gwIL8AAQAAE2jYDdQjYDfk0AKIgbABQkiAAjcjHg");
	this.shape_7.setTransform(350.2,307.6,1,1,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#444444").ss(1,1,1).p("AL+jfQAAEbi8DYQi7DYkaApQkZApjvibQjwiahRkQQhRkRB4kEIK1E9g");
	this.shape_8.setTransform(366.1,307.4,1,1,90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F53E4F").s().p("AmbGjQjwiahRkQQhRkRB4kEIK1E9IL+AAQAAEbi8DYQi7DYkaApQg7AIg5AAQjXAAi9h6g");
	this.shape_9.setTransform(366.1,307.4,1,1,90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#444444").ss(1,1,1).p("AL+ABQAAEfjADZQjADakdAlQkbAkjwiiQjvihhJkXQhJkWCCkCQCCkBENhtQENhsELBhIj+LQg");
	this.shape_10.setTransform(388.6,307.4,1,1,90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F53E4F").s().p("AmqJ6QjvihhJkXQhJkWCCkCQCCkBENhtQENhsELBhIj+LQIL+AAQAAEfjADZQjADakdAlQg0AGgyAAQjhAAjEiEg");
	this.shape_11.setTransform(388.6,307.4,1,1,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#444444").ss(1,1,1).p("AL9AAQAAE9jgDgQjgDgk9AAQk8AAjgjgQjgjgAAk9QAAk8DgjgQDgjgE8AAQE9AADgDgQDgDgAAE8g");
	this.shape_12.setTransform(388.5,307.5,1,1,90);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F53E4F").s().p("AocIdQjgjgAAk9QAAk8DgjgQDgjgE8AAQE9AADgDgQDgDgAAE8QAAE9jgDgQjgDgk9AAQk8AAjgjgg");
	this.shape_13.setTransform(388.5,307.5,1,1,90);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},12).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},58).wait(1));

	// m
	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(374.1,297.9,0.326,0.326,-12.5,0,0,24.1,-52.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({regY:-51.9,scaleX:1.16,scaleY:1.16,rotation:4.7,y:298},4).to({regX:24,regY:-52.1,scaleX:1,scaleY:1,rotation:0,x:374,y:297.9},3).wait(53));

	// hello
	this.instance_3 = new lib.Анимация4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(414.2,304,0.576,0.576,15,0,0,108.2,-66);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({scaleX:1.13,scaleY:1.13,rotation:-7.2,x:458.2,y:284},4).to({regX:108.1,scaleX:1,scaleY:1,rotation:0,x:458.1},3).wait(1).to({regX:0,regY:0,x:350,y:349.9},0).wait(1).to({rotation:-0.1,y:349.8},0).wait(1).to({x:350.1,y:349.7},0).wait(1).to({rotation:-0.2,y:349.6},0).wait(1).to({y:349.4},0).wait(1).to({rotation:-0.3,x:350.2,y:349.3},0).wait(1).to({y:349.2},0).wait(1).to({rotation:-0.4,y:349.1},0).wait(1).to({y:349},0).wait(1).to({rotation:-0.5,x:350.3,y:348.8},0).wait(1).to({regX:108.1,regY:-66,x:457.7,y:281.6},0).wait(1).to({regX:0,regY:0,x:350.2,y:348.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:108.1,regY:-66,x:457.7,y:281.6},0).wait(1).to({regX:0,regY:0,x:350.2,y:348.8},0).wait(1).to({rotation:-0.4,x:350.1,y:349},0).wait(1).to({y:349.1},0).wait(1).to({rotation:-0.3,x:350,y:349.3},0).wait(1).to({rotation:-0.2,x:349.9,y:349.5},0).wait(1).to({y:349.6},0).wait(1).to({rotation:-0.1,x:349.8,y:349.8},0).wait(1).to({x:349.7,y:350},0).wait(1).to({rotation:0,y:350.1},0).wait(1).to({rotation:0.1,x:349.6,y:350.3},0).wait(1).to({y:350.5},0).wait(1).to({rotation:0.2,x:349.5,y:350.6},0).wait(1).to({rotation:0.3,x:349.4,y:350.8},0).wait(1).to({y:351},0).wait(1).to({rotation:0.4,x:349.3,y:351.1},0).wait(1).to({rotation:0.5,x:349.2,y:351.3},0).wait(1).to({y:351.5},0).wait(1).to({rotation:0.6,x:349.1,y:351.7},0).wait(1).to({rotation:0.7,x:349,y:351.8},0).wait(1).to({y:352},0).wait(1).to({regX:108.1,regY:-66,rotation:0.8,x:457.9,y:287.7},0).wait(1).to({regX:0,regY:0,rotation:0.7,x:349,y:352},0).wait(1).to({rotation:0.6,x:349.1,y:351.7},0).wait(1).to({rotation:0.5,x:349.2,y:351.5},0).wait(1).to({x:349.4,y:351.2},0).wait(1).to({rotation:0.4,x:349.5,y:351},0).wait(1).to({rotation:0.3,x:349.6,y:350.7},0).wait(1).to({rotation:0.2,x:349.7,y:350.5},0).wait(1).to({rotation:0.1,x:349.8,y:350.2},0).wait(1).to({regX:108.1,regY:-66,rotation:0,x:458.1,y:284},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 700,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images4/test 4_script test_2_atlas_.png", id:"test 4_script test_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;