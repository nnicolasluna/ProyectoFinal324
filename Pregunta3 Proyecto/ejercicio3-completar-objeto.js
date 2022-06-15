var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;

function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,10,10);
	camera.lookAt(0,0,0); 

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 0, 0, 0 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
        var labo=new THREE.Geometry();
		var piso=new THREE.Geometry();
		var mesa=new THREE.Geometry();
		var mesa2=new THREE.Geometry();
		var mesa3=new THREE.Geometry();
		var mesa4=new THREE.Geometry();
		var mesa5=new THREE.Geometry();
		var mesa6=new THREE.Geometry();
		var pc= new THREE.Geometry();
		var pc2=new THREE.Geometry();
		var pc3= new THREE.Geometry();
		var pc4= new THREE.Geometry();
		var pc5=new THREE.Geometry();
		var pc6= new THREE.Geometry();
		var pc7= new THREE.Geometry();
		var pc8= new THREE.Geometry();
		var pc9= new THREE.Geometry();
		var pc10= new THREE.Geometry();
		var pc11= new THREE.Geometry();
		var pc12= new THREE.Geometry();
		var pc13= new THREE.Geometry();
		var pc14= new THREE.Geometry();
		var pc15= new THREE.Geometry();
		var monitor=new THREE.Geometry();
		var monitor2=new THREE.Geometry();
		var monitor3=new THREE.Geometry();
		var monitor4=new THREE.Geometry();
		var monitor5=new THREE.Geometry();
		var monitor6=new THREE.Geometry();
		var monitor7=new THREE.Geometry();
		var monitor8=new THREE.Geometry();
		var monitor9=new THREE.Geometry();
		var monitor10=new THREE.Geometry();
		var monitor11=new THREE.Geometry();
		var monitor12=new THREE.Geometry();
		var monitor13=new THREE.Geometry();
		var monitor14=new THREE.Geometry();
		var monitor15=new THREE.Geometry();
		var pantalla1=new THREE.Geometry();
		var pantalla2=new THREE.Geometry();
		var pantalla3=new THREE.Geometry();
		var pantalla4=new THREE.Geometry();
		var pantalla5=new THREE.Geometry();
		var pantalla6=new THREE.Geometry();
		var pantalla7=new THREE.Geometry();
		var pantalla8=new THREE.Geometry();
		var pantalla9=new THREE.Geometry();
		var pantalla10=new THREE.Geometry();
		var pantalla11=new THREE.Geometry();
		var pantalla12=new THREE.Geometry();
		var pantalla13=new THREE.Geometry();
		var pantalla14=new THREE.Geometry();
		var pantalla15=new THREE.Geometry();
		var mesa0=new THREE.Geometry();
		var pc0=new THREE.Geometry();
		var monitorb=new THREE.Geometry();
		var pantallab=new THREE.Geometry();
		var pizarra=new THREE.Geometry();
//-------------------------------------------------------------------------------------------------------------
	//labo PAREDES
	labo.vertices.push(new THREE.Vector3(9, 0 ,0));//0
	labo.vertices.push(new THREE.Vector3(0, 0 ,9));//1
	labo.vertices.push(new THREE.Vector3(0, 3 ,9));//2
	labo.vertices.push(new THREE.Vector3(9, 3 ,0));//3
	
	labo.vertices.push(new THREE.Vector3(-10, 0 , -1));//4
	labo.vertices.push(new THREE.Vector3( -1, 0 ,-10));//5
	labo.vertices.push(new THREE.Vector3( -1, 3 ,-10));//6
	labo.vertices.push(new THREE.Vector3(-10, 3 , -1));//7

	labo.vertices.push(new THREE.Vector3(-3, 0 ,6));//8
	labo.vertices.push(new THREE.Vector3(-3, 3 ,6));//9
	labo.vertices.push(new THREE.Vector3(-2, 0 ,7));//10
	labo.vertices.push(new THREE.Vector3(-2, 3 ,7));//11
	
	//MESA 1
	mesa.vertices.push(new THREE.Vector3( 1, 0.02, 1));//0
	mesa.vertices.push(new THREE.Vector3(-3, 0.02, 5));//1 
	mesa.vertices.push(new THREE.Vector3(-4, 0.02, 4));//2
	mesa.vertices.push(new THREE.Vector3( 0, 0.02, 0));//3

	mesa.vertices.push(new THREE.Vector3( 1, 0.75, 1));//4
	mesa.vertices.push(new THREE.Vector3(-3, 0.75, 5));//5 
	mesa.vertices.push(new THREE.Vector3(-4, 0.75, 4));//6
	mesa.vertices.push(new THREE.Vector3( 0, 0.75, 0));//7

	//MESA 2
	mesa2.vertices.push(new THREE.Vector3( -1, 0.02, -1));//0
	mesa2.vertices.push(new THREE.Vector3(-5, 0.02, 3));//1 
	mesa2.vertices.push(new THREE.Vector3(-6, 0.02, 2));//2
	mesa2.vertices.push(new THREE.Vector3( -2, 0.02, -2));//3

	mesa2.vertices.push(new THREE.Vector3( -1, 0.75, -1));//4
	mesa2.vertices.push(new THREE.Vector3(-5, 0.75, 3));//5 
	mesa2.vertices.push(new THREE.Vector3(-6, 0.75, 2));//6
	mesa2.vertices.push(new THREE.Vector3( -2, 0.75, -2));//7	

	//MESA 3
	mesa3.vertices.push(new THREE.Vector3(-3,0.02,-3));//0
	mesa3.vertices.push(new THREE.Vector3(-7,0.02,1));//1 
	mesa3.vertices.push(new THREE.Vector3(-8,0.02,0));//2
	mesa3.vertices.push(new THREE.Vector3(-4,0.02,-4));//3

	mesa3.vertices.push(new THREE.Vector3(-3,0.75,-3));//4
	mesa3.vertices.push(new THREE.Vector3(-7,0.75,1));//5 
	mesa3.vertices.push(new THREE.Vector3(-8,0.75,0));//6
	mesa3.vertices.push(new THREE.Vector3(-4,0.75,-4));//7	

	//MESA 4
	mesa4.vertices.push(new THREE.Vector3(5,0.02,-3));//0
	mesa4.vertices.push(new THREE.Vector3(2,0.02,0));//1 
	mesa4.vertices.push(new THREE.Vector3(1,0.02,-1));//2
	mesa4.vertices.push(new THREE.Vector3(4,0.02,-4));//3

	mesa4.vertices.push(new THREE.Vector3(5,0.75,-3));//4
	mesa4.vertices.push(new THREE.Vector3(2,0.75,0));//5 
	mesa4.vertices.push(new THREE.Vector3(1,0.75,-1));//6
	mesa4.vertices.push(new THREE.Vector3(4,0.75,-4));//7	

	//MESA 5
	mesa5.vertices.push(new THREE.Vector3(3,0.02,-5));//0
	mesa5.vertices.push(new THREE.Vector3(0,0.02,-2));//1 
	mesa5.vertices.push(new THREE.Vector3(-1,0.02,-3));//2
	mesa5.vertices.push(new THREE.Vector3(2,0.02,-6));//3

	mesa5.vertices.push(new THREE.Vector3(3,0.75,-5));//4
	mesa5.vertices.push(new THREE.Vector3(0,0.75,-2));//5 
	mesa5.vertices.push(new THREE.Vector3(-1,0.75,-3));//6
	mesa5.vertices.push(new THREE.Vector3(2,0.75,-6));//7	

	//MESA 6
	mesa6.vertices.push(new THREE.Vector3(1,0.02,-7));//0
	mesa6.vertices.push(new THREE.Vector3(-2,0.02,-4));//1 
	mesa6.vertices.push(new THREE.Vector3(-3,0.02,-5));//2
	mesa6.vertices.push(new THREE.Vector3(0,0.02,-8));//3

	mesa6.vertices.push(new THREE.Vector3(1,0.75,-7));//4
	mesa6.vertices.push(new THREE.Vector3(-2,0.75,-4));//5 
	mesa6.vertices.push(new THREE.Vector3(-3,0.75,-5));//6
	mesa6.vertices.push(new THREE.Vector3(0,0.75,-8));//7	

	//PC
	pc.vertices.push(new THREE.Vector3(-1.75,0.03,3.75));//0
	pc.vertices.push(new THREE.Vector3(-2.25,0.03,4.25));//1
	pc.vertices.push(new THREE.Vector3(-3,0.03,3.5));//2
	pc.vertices.push(new THREE.Vector3(-2.5,0.03,3));//3
	
	pc.vertices.push(new THREE.Vector3(-1.75,0.65,3.75));//0
	pc.vertices.push(new THREE.Vector3(-2.25,0.65,4.25));//1
	pc.vertices.push(new THREE.Vector3(-3,0.65,3.5));//2
	pc.vertices.push(new THREE.Vector3(-2.5,0.65,3));//3

	pc2.vertices.push(new THREE.Vector3(-0.5,0.03,2.5));//0
	pc2.vertices.push(new THREE.Vector3(-1,0.03,3));//1
	pc2.vertices.push(new THREE.Vector3(-1.75,0.03,2.25));//2
	pc2.vertices.push(new THREE.Vector3(-1.25,0.03,1.75));//3
	
	pc2.vertices.push(new THREE.Vector3(-0.5,0.65,2.5));//0
	pc2.vertices.push(new THREE.Vector3(-1,0.65,3));//1
	pc2.vertices.push(new THREE.Vector3(-1.75,0.65,2.25));//2
	pc2.vertices.push(new THREE.Vector3(-1.25,0.65,1.75));//3

	pc3.vertices.push(new THREE.Vector3(0.5,0.03,1.25));//0
	pc3.vertices.push(new THREE.Vector3(0.25,0.03,1.75));//1
	pc3.vertices.push(new THREE.Vector3(-0.5,0.03,1));//2
	pc3.vertices.push(new THREE.Vector3(0,0.03,0.5));//3
	
	pc3.vertices.push(new THREE.Vector3(0.5,0.65,1.25));//0
	pc3.vertices.push(new THREE.Vector3(0.25,0.65,1.75));//1
	pc3.vertices.push(new THREE.Vector3(-0.5,0.65,1));//2
	pc3.vertices.push(new THREE.Vector3(0,0.65,0.5));//3

	pc4.vertices.push(new THREE.Vector3(3.25,0.03,-1.25));//0
	pc4.vertices.push(new THREE.Vector3(2.75,0.03,-0.75));//1
	pc4.vertices.push(new THREE.Vector3(2,0.03,-1.5));//2
	pc4.vertices.push(new THREE.Vector3(2.5,0.03,-2));//3
	
	pc4.vertices.push(new THREE.Vector3(3.25,0.65,-1.25));//0
	pc4.vertices.push(new THREE.Vector3(2.75,0.65,-0.75));//1
	pc4.vertices.push(new THREE.Vector3(2,0.65,-1.5));//2
	pc4.vertices.push(new THREE.Vector3(2.5,0.65,-2));//3

	pc5.vertices.push(new THREE.Vector3(4.75,0.03,-2.75));//0
	pc5.vertices.push(new THREE.Vector3(4.25,0.03,-2.25));//1
	pc5.vertices.push(new THREE.Vector3(3.5,0.03,-3));//2
	pc5.vertices.push(new THREE.Vector3(4,0.03,-3.5));//3
	
	pc5.vertices.push(new THREE.Vector3(4.75,0.65,-2.75));//0
	pc5.vertices.push(new THREE.Vector3(4.25,0.65,-2.25));//1
	pc5.vertices.push(new THREE.Vector3(3.5,0.65,-3));//2
	pc5.vertices.push(new THREE.Vector3(4,0.65,-3.5));//3

	pc6.vertices.push(new THREE.Vector3(-3.75,0.03,1.75));//0
	pc6.vertices.push(new THREE.Vector3(-4.25,0.03,2.25));//1
	pc6.vertices.push(new THREE.Vector3(-5,0.03,1.5));//2
	pc6.vertices.push(new THREE.Vector3(-4.5,0.03,1));//3
	
	pc6.vertices.push(new THREE.Vector3(-3.75,0.65,1.75));//0
	pc6.vertices.push(new THREE.Vector3(-4.25,0.65,2.25));//1
	pc6.vertices.push(new THREE.Vector3(-5,0.65,1.5));//2
	pc6.vertices.push(new THREE.Vector3(-4.5,0.65,1));//3

	pc7.vertices.push(new THREE.Vector3(-2.5,0.03,0.5));//0
	pc7.vertices.push(new THREE.Vector3(-3,0.03,1));//1
	pc7.vertices.push(new THREE.Vector3(-3.75,0.03,0.25));//2
	pc7.vertices.push(new THREE.Vector3(-3.25,0.03,-0.25));//3
	
	pc7.vertices.push(new THREE.Vector3(-2.5,0.65,0.5));//0
	pc7.vertices.push(new THREE.Vector3(-3,0.65,1));//1
	pc7.vertices.push(new THREE.Vector3(-3.75,0.65,0.25));//2
	pc7.vertices.push(new THREE.Vector3(-3.25,0.65,-0.25));//3

	pc8.vertices.push(new THREE.Vector3(-1.25,0.03,-0.75));//0
	pc8.vertices.push(new THREE.Vector3(-1.75,0.03,-0.25));//1
	pc8.vertices.push(new THREE.Vector3(-2.5,0.03,-1));//2
	pc8.vertices.push(new THREE.Vector3(-2,0.03,-1.5));//3

	pc8.vertices.push(new THREE.Vector3(-1.25,0.65,-0.75));//0
	pc8.vertices.push(new THREE.Vector3(-1.75,0.65,-0.25));//1
	pc8.vertices.push(new THREE.Vector3(-2.5,0.65,-1));//2
	pc8.vertices.push(new THREE.Vector3(-2,0.65,-1.5));//3

	pc9.vertices.push(new THREE.Vector3(1.25,0.03,-3.25));//0
	pc9.vertices.push(new THREE.Vector3(0.75,0.03,-2.75));//1
	pc9.vertices.push(new THREE.Vector3(0,0.03,-3.5));//2
	pc9.vertices.push(new THREE.Vector3(0.5,0.03,-4));//3

	pc9.vertices.push(new THREE.Vector3(1.25,0.65,-3.25));//0
	pc9.vertices.push(new THREE.Vector3(0.75,0.65,-2.75));//1
	pc9.vertices.push(new THREE.Vector3(0,0.65,-3.5));//2
	pc9.vertices.push(new THREE.Vector3(0.5,0.65,-4));//3

	pc10.vertices.push(new THREE.Vector3(2.75,0.03,-4.75));//0
	pc10.vertices.push(new THREE.Vector3(2.25,0.03,-4.25));//1
	pc10.vertices.push(new THREE.Vector3(1.5,0.03,-5));//2
	pc10.vertices.push(new THREE.Vector3(2,0.03,-5.5));//3

	pc10.vertices.push(new THREE.Vector3(2.75,0.65,-4.75));//0
	pc10.vertices.push(new THREE.Vector3(2.25,0.65,-4.25));//1
	pc10.vertices.push(new THREE.Vector3(1.5,0.65,-5));//2
	pc10.vertices.push(new THREE.Vector3(2,0.65,-5.5));//3

	pc11.vertices.push(new THREE.Vector3(-5.75,0.03,-0.25));//0
	pc11.vertices.push(new THREE.Vector3(-6.25,0.03,0.25));//1
	pc11.vertices.push(new THREE.Vector3(-7,0.03,-0.5));//2
	pc11.vertices.push(new THREE.Vector3(-6.5,0.03,-1));//3

	pc11.vertices.push(new THREE.Vector3(-5.75,0.65,-0.25));//0
	pc11.vertices.push(new THREE.Vector3(-6.25,0.65,0.25));//1
	pc11.vertices.push(new THREE.Vector3(-7,0.65,-0.5));//2
	pc11.vertices.push(new THREE.Vector3(-6.5,0.65,-1));//3

	pc12.vertices.push(new THREE.Vector3(-4.5,0.03,-1.5));//0
	pc12.vertices.push(new THREE.Vector3(-5,0.03,-1));//1
	pc12.vertices.push(new THREE.Vector3(-5.75,0.03,-1.75));//2
	pc12.vertices.push(new THREE.Vector3(-5.25,0.03,-2.25));//3

	pc12.vertices.push(new THREE.Vector3(-4.5,0.65,-1.5));//0
	pc12.vertices.push(new THREE.Vector3(-5,0.65,-1));//1
	pc12.vertices.push(new THREE.Vector3(-5.75,0.65,-1.75));//2
	pc12.vertices.push(new THREE.Vector3(-5.25,0.65,-2.25));//3

	pc13.vertices.push(new THREE.Vector3(-3.25,0.03,-2.75));//0
	pc13.vertices.push(new THREE.Vector3(-3.75,0.03,-2.25));//1
	pc13.vertices.push(new THREE.Vector3(-4.5,0.03,-3));//2
	pc13.vertices.push(new THREE.Vector3(-4,0.03,-3.5));//3

	pc13.vertices.push(new THREE.Vector3(-3.25,0.65,-2.75));//0
	pc13.vertices.push(new THREE.Vector3(-3.75,0.65,-2.25));//1
	pc13.vertices.push(new THREE.Vector3(-4.5,0.65,-3));//2
	pc13.vertices.push(new THREE.Vector3(-4,0.65,-3.5));//3

	pc14.vertices.push(new THREE.Vector3(-0.75,0.03,-5.25));//0
	pc14.vertices.push(new THREE.Vector3(-1.25,0.03,-4.75));//1
	pc14.vertices.push(new THREE.Vector3(-2,0.03,-5.5));//2
	pc14.vertices.push(new THREE.Vector3(-1.5,0.03,-6));//3

	pc14.vertices.push(new THREE.Vector3(-0.75,0.65,-5.25));//0
	pc14.vertices.push(new THREE.Vector3(-1.25,0.65,-4.75));//1
	pc14.vertices.push(new THREE.Vector3(-2,0.65,-5.5));//2
	pc14.vertices.push(new THREE.Vector3(-1.5,0.65,-6));//3

	pc15.vertices.push(new THREE.Vector3(0.75,0.03,-6.75));//0
	pc15.vertices.push(new THREE.Vector3(0.25,0.03,-6.25));//1
	pc15.vertices.push(new THREE.Vector3(-0.5,0.03,-7));//2
	pc15.vertices.push(new THREE.Vector3(0,0.03,-7.5));//3

	pc15.vertices.push(new THREE.Vector3(0.75,0.65,-6.75));//0
	pc15.vertices.push(new THREE.Vector3(0.25,0.65,-6.25));//1
	pc15.vertices.push(new THREE.Vector3(-0.5,0.65,-7));//2
	pc15.vertices.push(new THREE.Vector3(0,0.65,-7.5));//3

	//monitor
	monitor.vertices.push(new THREE.Vector3(-2.25,0.80,3.25));//0
	monitor.vertices.push(new THREE.Vector3(-3.25,0.80,4.25));//1
	monitor.vertices.push(new THREE.Vector3(-3.5,0.80,4));//2 
	monitor.vertices.push(new THREE.Vector3(-2.5,0.80,3));//3
	monitor.vertices.push(new THREE.Vector3(-2.25,1.5,3.25));//0
	monitor.vertices.push(new THREE.Vector3(-3.25,1.5,4.25));//1
	monitor.vertices.push(new THREE.Vector3(-3.5,1.5,4));//2
	monitor.vertices.push(new THREE.Vector3(-2.5,1.5,3));//3
	
	monitor2.vertices.push(new THREE.Vector3(-1,0.80,2));//0
	monitor2.vertices.push(new THREE.Vector3(-2,0.80,3));//1
	monitor2.vertices.push(new THREE.Vector3(-2.25,0.80,2.75));//2 
	monitor2.vertices.push(new THREE.Vector3(-1.25,0.80,1.75));//3
	monitor2.vertices.push(new THREE.Vector3(-1,1.5,2));//0
	monitor2.vertices.push(new THREE.Vector3(-2,1.5,3));//1
	monitor2.vertices.push(new THREE.Vector3(-2.25,1.5,2.75));//2
	monitor2.vertices.push(new THREE.Vector3(-1.25,1.5,1.75));//3

	monitor3.vertices.push(new THREE.Vector3(0.25,0.80,0.75));//0
	monitor3.vertices.push(new THREE.Vector3(-0.75,0.80,1.75));//1
	monitor3.vertices.push(new THREE.Vector3(-1,0.80,1.5));//2 
	monitor3.vertices.push(new THREE.Vector3(0,0.80,0.5));//3
	monitor3.vertices.push(new THREE.Vector3(0.25,1.5,0.75));//0
	monitor3.vertices.push(new THREE.Vector3(-0.75,1.5,1.75));//1
	monitor3.vertices.push(new THREE.Vector3(-1,1.5,1.5));//2
	monitor3.vertices.push(new THREE.Vector3(0,1.5,0.5));//3

	monitor4.vertices.push(new THREE.Vector3(2.75,0.80,-1.75));//0
	monitor4.vertices.push(new THREE.Vector3(1.75,0.80,-0.75));//1
	monitor4.vertices.push(new THREE.Vector3(1.5,0.80,-1));//2 
	monitor4.vertices.push(new THREE.Vector3(2.5,0.80,-2));//3

	monitor4.vertices.push(new THREE.Vector3(2.75,1.5,-1.75));//0
	monitor4.vertices.push(new THREE.Vector3(1.75,1.5,-0.75));//1
	monitor4.vertices.push(new THREE.Vector3(1.5,1.5,-1));//2
	monitor4.vertices.push(new THREE.Vector3(2.5,1.5,-2));//3

	monitor5.vertices.push(new THREE.Vector3(4.25,0.80,-3.25));//0
	monitor5.vertices.push(new THREE.Vector3(3.25,0.80,-2.25));//1
	monitor5.vertices.push(new THREE.Vector3(3,0.80,-2.5));//2 
	monitor5.vertices.push(new THREE.Vector3(4,0.80,-3.5));//3
	monitor5.vertices.push(new THREE.Vector3(4.25,1.5,-3.25));//0
	monitor5.vertices.push(new THREE.Vector3(3.25,1.5,-2.25));//1
	monitor5.vertices.push(new THREE.Vector3(3,1.5,-2.5));//2
	monitor5.vertices.push(new THREE.Vector3(4,1.5,-3.5));//3

	monitor6.vertices.push(new THREE.Vector3(-4.25,0.80,1.25));//0
	monitor6.vertices.push(new THREE.Vector3(-5.25,0.80,2.25));//1
	monitor6.vertices.push(new THREE.Vector3(-5.5,0.80,2));//2 
	monitor6.vertices.push(new THREE.Vector3(-4.5,0.80,1));//3
	monitor6.vertices.push(new THREE.Vector3(-4.25,1.5,1.25));//0
	monitor6.vertices.push(new THREE.Vector3(-5.25,1.5,2.25));//1
	monitor6.vertices.push(new THREE.Vector3(-5.5,1.5,2));//2
	monitor6.vertices.push(new THREE.Vector3(-4.5,1.5,1));//3

	monitor7.vertices.push(new THREE.Vector3(-3,0.80,0));//0
	monitor7.vertices.push(new THREE.Vector3(-4,0.80,1));//1
	monitor7.vertices.push(new THREE.Vector3(-4.25,0.80,0.75));//2 
	monitor7.vertices.push(new THREE.Vector3(-3.25,0.80,-0.25));//3
	monitor7.vertices.push(new THREE.Vector3(-3,1.5,0));//0
	monitor7.vertices.push(new THREE.Vector3(-4,1.5,1));//1
	monitor7.vertices.push(new THREE.Vector3(-4.25,1.5,0.75));//2
	monitor7.vertices.push(new THREE.Vector3(-3.25,1.5,-0.25));//3

	monitor8.vertices.push(new THREE.Vector3(-1.75,0.80,-1.25));//0
	monitor8.vertices.push(new THREE.Vector3(-2.75,0.80,-0.25));//1
	monitor8.vertices.push(new THREE.Vector3(-3,0.80,-0.5));//2 
	monitor8.vertices.push(new THREE.Vector3(-2,0.80,-1.5));//3
	monitor8.vertices.push(new THREE.Vector3(-1.75,1.5,-1.25));//0
	monitor8.vertices.push(new THREE.Vector3(-2.75,1.5,-0.25));//1
	monitor8.vertices.push(new THREE.Vector3(-3,1.5,-0.5));//2
	monitor8.vertices.push(new THREE.Vector3(-2,1.5,-1.5));//3

	monitor9.vertices.push(new THREE.Vector3(0.75,0.80,-3.75));//0
	monitor9.vertices.push(new THREE.Vector3(-0.25,0.80,-2.75));//1
	monitor9.vertices.push(new THREE.Vector3(-0.5,0.80,-3));//2 
	monitor9.vertices.push(new THREE.Vector3(0.5,0.80,-4));//3
	monitor9.vertices.push(new THREE.Vector3(0.75,1.5,-3.75));//0
	monitor9.vertices.push(new THREE.Vector3(-0.25,1.5,-2.75));//1
	monitor9.vertices.push(new THREE.Vector3(-0.5,1.5,-3));//2
	monitor9.vertices.push(new THREE.Vector3(0.5,1.5,-4));//3

	monitor10.vertices.push(new THREE.Vector3(2.25,0.80,-5.25));//0
	monitor10.vertices.push(new THREE.Vector3(1.25,0.80,-4.25));//1
	monitor10.vertices.push(new THREE.Vector3(1,0.80,-4.5));//2 
	monitor10.vertices.push(new THREE.Vector3(2,0.80,-5.5));//3
	monitor10.vertices.push(new THREE.Vector3(2.25,1.5,-5.25));//0
	monitor10.vertices.push(new THREE.Vector3(1.25,1.5,-4.25));//1
	monitor10.vertices.push(new THREE.Vector3(1,1.5,-4.5));//2
	monitor10.vertices.push(new THREE.Vector3(2,1.5,-5.5));//3

	monitor11.vertices.push(new THREE.Vector3(-6.25,0.80,-0.75));//0
	monitor11.vertices.push(new THREE.Vector3(-7.25,0.80,0.25));//1
	monitor11.vertices.push(new THREE.Vector3(-7.5,0.80,0));//2 
	monitor11.vertices.push(new THREE.Vector3(-6.5,0.80,-1));//3

	monitor11.vertices.push(new THREE.Vector3(-6.25,1.5,-0.75));//0
	monitor11.vertices.push(new THREE.Vector3(-7.25,1.5,0.25));//1
	monitor11.vertices.push(new THREE.Vector3(-7.5,1.5,0));//2
	monitor11.vertices.push(new THREE.Vector3(-6.5,1.5,-1));//3

	monitor12.vertices.push(new THREE.Vector3(-5,0.80,-2));//0
	monitor12.vertices.push(new THREE.Vector3(-6,0.80,-1));//1
	monitor12.vertices.push(new THREE.Vector3(-6.25,0.80,-1.25));//2 
	monitor12.vertices.push(new THREE.Vector3(-5.25,0.80,-2.25));//3

	monitor12.vertices.push(new THREE.Vector3(-5,1.5,-2));//0
	monitor12.vertices.push(new THREE.Vector3(-6,1.5,-1));//1
	monitor12.vertices.push(new THREE.Vector3(-6.25,1.5,-1.25));//2
	monitor12.vertices.push(new THREE.Vector3(-5.25,1.5,-2.25));//3

	monitor13.vertices.push(new THREE.Vector3(-3.75,0.80,-3.25));//0
	monitor13.vertices.push(new THREE.Vector3(-4.75,0.80,-2.25));//1
	monitor13.vertices.push(new THREE.Vector3(-5,0.80,-2.5));//2 
	monitor13.vertices.push(new THREE.Vector3(-4,0.80,-3.5));//3
	monitor13.vertices.push(new THREE.Vector3(-3.75,1.5,-3.25));//0
	monitor13.vertices.push(new THREE.Vector3(-4.75,1.5,-2.25));//1
	monitor13.vertices.push(new THREE.Vector3(-5,1.5,-2.5));//2
	monitor13.vertices.push(new THREE.Vector3(-4,1.5,-3.5));//3

	monitor14.vertices.push(new THREE.Vector3(-1.25,0.80,-5.75));//0
	monitor14.vertices.push(new THREE.Vector3(-2.25,0.80,-4.75));//1
	monitor14.vertices.push(new THREE.Vector3(-2.5,0.80,-5));//2 
	monitor14.vertices.push(new THREE.Vector3(-1.5,0.80,-6));//3
	monitor14.vertices.push(new THREE.Vector3(-1.25,1.5,-5.75));//0
	monitor14.vertices.push(new THREE.Vector3(-2.25,1.5,-4.75));//1
	monitor14.vertices.push(new THREE.Vector3(-2.5,1.5,-5));//2
	monitor14.vertices.push(new THREE.Vector3(-1.5,1.5,-6));//3

	monitor15.vertices.push(new THREE.Vector3(0.25,0.80,-7.25));//0
	monitor15.vertices.push(new THREE.Vector3(-0.75,0.80,-6.25));//1
	monitor15.vertices.push(new THREE.Vector3(-1,0.80,-6.5));//2 
	monitor15.vertices.push(new THREE.Vector3(0,0.80,-7.5));//3
	monitor15.vertices.push(new THREE.Vector3(0.25,1.5,-7.25));//0
	monitor15.vertices.push(new THREE.Vector3(-0.75,1.5,-6.25));//1
	monitor15.vertices.push(new THREE.Vector3(-1,1.5,-6.5));//2
	monitor15.vertices.push(new THREE.Vector3(0,1.5,-7.5));//3
		
//PANTALLAS
	pantalla1.vertices.push(new THREE.Vector3(-2.25,0.80,3.25));//0
	pantalla1.vertices.push(new THREE.Vector3(-3.25,0.80,4.25));//1
	pantalla1.vertices.push(new THREE.Vector3(-3.5,0.80,4));//2 
	pantalla1.vertices.push(new THREE.Vector3(-2.5,0.80,3));//3
	pantalla1.vertices.push(new THREE.Vector3(-2.25,1.5,3.25));//0
	pantalla1.vertices.push(new THREE.Vector3(-3.25,1.5,4.25));//1
	pantalla1.vertices.push(new THREE.Vector3(-3.5,1.5,4));//2
	pantalla1.vertices.push(new THREE.Vector3(-2.5,1.5,3));//3
	
	pantalla2.vertices.push(new THREE.Vector3(-1,0.80,2));//0
	pantalla2.vertices.push(new THREE.Vector3(-2,0.80,3));//1
	pantalla2.vertices.push(new THREE.Vector3(-2.25,0.80,2.75));//2 
	pantalla2.vertices.push(new THREE.Vector3(-1.25,0.80,1.75));//3
	pantalla2.vertices.push(new THREE.Vector3(-1,1.5,2));//0
	pantalla2.vertices.push(new THREE.Vector3(-2,1.5,3));//1
	pantalla2.vertices.push(new THREE.Vector3(-2.25,1.5,2.75));//2
	pantalla2.vertices.push(new THREE.Vector3(-1.25,1.5,1.75));//3

	pantalla3.vertices.push(new THREE.Vector3(0.25,0.80,0.75));//0
	pantalla3.vertices.push(new THREE.Vector3(-0.75,0.80,1.75));//1
	pantalla3.vertices.push(new THREE.Vector3(-1,0.80,1.5));//2 
	pantalla3.vertices.push(new THREE.Vector3(0,0.80,0.5));//3
	pantalla3.vertices.push(new THREE.Vector3(0.25,1.5,0.75));//0
	pantalla3.vertices.push(new THREE.Vector3(-0.75,1.5,1.75));//1
	pantalla3.vertices.push(new THREE.Vector3(-1,1.5,1.5));//2
	pantalla3.vertices.push(new THREE.Vector3(0,1.5,0.5));//3
	
	pantalla4.vertices.push(new THREE.Vector3(2.75,0.80,-1.75));//0
	pantalla4.vertices.push(new THREE.Vector3(1.75,0.80,-0.75));//1
	pantalla4.vertices.push(new THREE.Vector3(1.5,0.80,-1));//2 
	pantalla4.vertices.push(new THREE.Vector3(2.5,0.80,-2));//3
	pantalla4.vertices.push(new THREE.Vector3(2.75,1.5,-1.75));//0
	pantalla4.vertices.push(new THREE.Vector3(1.75,1.5,-0.75));//1
	pantalla4.vertices.push(new THREE.Vector3(1.5,1.5,-1));//2
	pantalla4.vertices.push(new THREE.Vector3(2.5,1.5,-2));//3

	pantalla5.vertices.push(new THREE.Vector3(4.25,0.80,-3.25));//0
	pantalla5.vertices.push(new THREE.Vector3(3.25,0.80,-2.25));//1
	pantalla5.vertices.push(new THREE.Vector3(3,0.80,-2.5));//2 
	pantalla5.vertices.push(new THREE.Vector3(4,0.80,-3.5));//3
	pantalla5.vertices.push(new THREE.Vector3(4.25,1.5,-3.25));//0
	pantalla5.vertices.push(new THREE.Vector3(3.25,1.5,-2.25));//1
	pantalla5.vertices.push(new THREE.Vector3(3,1.5,-2.5));//2
	pantalla5.vertices.push(new THREE.Vector3(4,1.5,-3.5));//3

	pantalla6.vertices.push(new THREE.Vector3(-4.25,0.80,1.25));//0
	pantalla6.vertices.push(new THREE.Vector3(-5.25,0.80,2.25));//1
	pantalla6.vertices.push(new THREE.Vector3(-5.5,0.80,2));//2 
	pantalla6.vertices.push(new THREE.Vector3(-4.5,0.80,1));//3
	pantalla6.vertices.push(new THREE.Vector3(-4.25,1.5,1.25));//0
	pantalla6.vertices.push(new THREE.Vector3(-5.25,1.5,2.25));//1
	pantalla6.vertices.push(new THREE.Vector3(-5.5,1.5,2));//2
	pantalla6.vertices.push(new THREE.Vector3(-4.5,1.5,1));//3

	pantalla7.vertices.push(new THREE.Vector3(-3,0.80,0));//0
	pantalla7.vertices.push(new THREE.Vector3(-4,0.80,1));//1
	pantalla7.vertices.push(new THREE.Vector3(-4.25,0.80,0.75));//2 
	pantalla7.vertices.push(new THREE.Vector3(-3.25,0.80,-0.25));//3
	pantalla7.vertices.push(new THREE.Vector3(-3,1.5,0));//0
	pantalla7.vertices.push(new THREE.Vector3(-4,1.5,1));//1
	pantalla7.vertices.push(new THREE.Vector3(-4.25,1.5,0.75));//2
	pantalla7.vertices.push(new THREE.Vector3(-3.25,1.5,-0.25));//3

	pantalla8.vertices.push(new THREE.Vector3(-1.75,0.80,-1.25));//0
	pantalla8.vertices.push(new THREE.Vector3(-2.75,0.80,-0.25));//1
	pantalla8.vertices.push(new THREE.Vector3(-3,0.80,-0.5));//2 
	pantalla8.vertices.push(new THREE.Vector3(-2,0.80,-1.5));//3
	pantalla8.vertices.push(new THREE.Vector3(-1.75,1.5,-1.25));//0
	pantalla8.vertices.push(new THREE.Vector3(-2.75,1.5,-0.25));//1
	pantalla8.vertices.push(new THREE.Vector3(-3,1.5,-0.5));//2
	pantalla8.vertices.push(new THREE.Vector3(-2,1.5,-1.5));//3

	pantalla9.vertices.push(new THREE.Vector3(0.75,0.80,-3.75));//0
	pantalla9.vertices.push(new THREE.Vector3(-0.25,0.80,-2.75));//1
	pantalla9.vertices.push(new THREE.Vector3(-0.5,0.80,-3));//2 
	pantalla9.vertices.push(new THREE.Vector3(0.5,0.80,-4));//3
	pantalla9.vertices.push(new THREE.Vector3(0.75,1.5,-3.75));//0
	pantalla9.vertices.push(new THREE.Vector3(-0.25,1.5,-2.75));//1
	pantalla9.vertices.push(new THREE.Vector3(-0.5,1.5,-3));//2
	pantalla9.vertices.push(new THREE.Vector3(0.5,1.5,-4));//3

	pantalla10.vertices.push(new THREE.Vector3(2.25,0.80,-5.25));//0
	pantalla10.vertices.push(new THREE.Vector3(1.25,0.80,-4.25));//1
	pantalla10.vertices.push(new THREE.Vector3(1,0.80,-4.5));//2 
	pantalla10.vertices.push(new THREE.Vector3(2,0.80,-5.5));//3
	pantalla10.vertices.push(new THREE.Vector3(2.25,1.5,-5.25));//0
	pantalla10.vertices.push(new THREE.Vector3(1.25,1.5,-4.25));//1
	pantalla10.vertices.push(new THREE.Vector3(1,1.5,-4.5));//2
	pantalla10.vertices.push(new THREE.Vector3(2,1.5,-5.5));//3

	pantalla11.vertices.push(new THREE.Vector3(-6.25,0.80,-0.75));//0
	pantalla11.vertices.push(new THREE.Vector3(-7.25,0.80,0.25));//1
	pantalla11.vertices.push(new THREE.Vector3(-7.5,0.80,0));//2 
	pantalla11.vertices.push(new THREE.Vector3(-6.5,0.80,-1));//3
	pantalla11.vertices.push(new THREE.Vector3(-6.25,1.5,-0.75));//0
	pantalla11.vertices.push(new THREE.Vector3(-7.25,1.5,0.25));//1
	pantalla11.vertices.push(new THREE.Vector3(-7.5,1.5,0));//2
	pantalla11.vertices.push(new THREE.Vector3(-6.5,1.5,-1));//3

	pantalla12.vertices.push(new THREE.Vector3(-5,0.80,-2));//0
	pantalla12.vertices.push(new THREE.Vector3(-6,0.80,-1));//1
	pantalla12.vertices.push(new THREE.Vector3(-6.25,0.80,-1.25));//2 
	pantalla12.vertices.push(new THREE.Vector3(-5.25,0.80,-2.25));//3

	pantalla12.vertices.push(new THREE.Vector3(-5,1.5,-2));//0
	pantalla12.vertices.push(new THREE.Vector3(-6,1.5,-1));//1
	pantalla12.vertices.push(new THREE.Vector3(-6.25,1.5,-1.25));//2
	pantalla12.vertices.push(new THREE.Vector3(-5.25,1.5,-2.25));//3

	pantalla13.vertices.push(new THREE.Vector3(-3.75,0.80,-3.25));//0
	pantalla13.vertices.push(new THREE.Vector3(-4.75,0.80,-2.25));//1
	pantalla13.vertices.push(new THREE.Vector3(-5,0.80,-2.5));//2 
	pantalla13.vertices.push(new THREE.Vector3(-4,0.80,-3.5));//3
	pantalla13.vertices.push(new THREE.Vector3(-3.75,1.5,-3.25));//0
	pantalla13.vertices.push(new THREE.Vector3(-4.75,1.5,-2.25));//1
	pantalla13.vertices.push(new THREE.Vector3(-5,1.5,-2.5));//2
	pantalla13.vertices.push(new THREE.Vector3(-4,1.5,-3.5));//3

	pantalla14.vertices.push(new THREE.Vector3(-1.25,0.80,-5.75));//0
	pantalla14.vertices.push(new THREE.Vector3(-2.25,0.80,-4.75));//1
	pantalla14.vertices.push(new THREE.Vector3(-2.5,0.80,-5));//2 
	pantalla14.vertices.push(new THREE.Vector3(-1.5,0.80,-6));//3
	pantalla14.vertices.push(new THREE.Vector3(-1.25,1.5,-5.75));//0
	pantalla14.vertices.push(new THREE.Vector3(-2.25,1.5,-4.75));//1
	pantalla14.vertices.push(new THREE.Vector3(-2.5,1.5,-5));//2
	pantalla14.vertices.push(new THREE.Vector3(-1.5,1.5,-6));//3

	pantalla15.vertices.push(new THREE.Vector3(0.25,0.80,-7.25));//0
	pantalla15.vertices.push(new THREE.Vector3(-0.75,0.80,-6.25));//1
	pantalla15.vertices.push(new THREE.Vector3(-1,0.80,-6.5));//2 
	pantalla15.vertices.push(new THREE.Vector3(0,0.80,-7.5));//3
	pantalla15.vertices.push(new THREE.Vector3(0.25,1.5,-7.25));//0
	pantalla15.vertices.push(new THREE.Vector3(-0.75,1.5,-6.25));//1
	pantalla15.vertices.push(new THREE.Vector3(-1,1.5,-6.5));//2
	pantalla15.vertices.push(new THREE.Vector3(0,1.5,-7.5));//3

	mesa0.vertices.push(new THREE.Vector3(6,0.02,-1));//3
	mesa0.vertices.push(new THREE.Vector3(4,0.02,1));//2
	mesa0.vertices.push(new THREE.Vector3(5,0.02,2));//1
	mesa0.vertices.push(new THREE.Vector3( 7,0.02,0));//0

	mesa0.vertices.push(new THREE.Vector3( 6, 0.75,-1 ));//3
	mesa0.vertices.push(new THREE.Vector3(4, 0.75,1));//2
	mesa0.vertices.push(new THREE.Vector3( 5, 0.75,2));//1 
	mesa0.vertices.push(new THREE.Vector3( 7,0.75, 0));//0 
	
	pc0.vertices.push(new THREE.Vector3(6,0.03,0.5));//0
	pc0.vertices.push(new THREE.Vector3(6.5,0.03,0));//1
	pc0.vertices.push(new THREE.Vector3(6,0.03,1));//2
	pc0.vertices.push(new THREE.Vector3(5.5,0.03,0.5));//3
	
	pc0.vertices.push(new THREE.Vector3(6,0.65,0.5));//0
	pc0.vertices.push(new THREE.Vector3(6,0.65,0));//1
	pc0.vertices.push(new THREE.Vector3(6,0.65,1));//2
	pc0.vertices.push(new THREE.Vector3(5.5,0.65,0.5));//3
	
	monitorb.vertices.push(new THREE.Vector3(6,0.8,0));//3
	monitorb.vertices.push(new THREE.Vector3(5,0.8,1));//2
	monitorb.vertices.push(new THREE.Vector3(5.25,0.8,1.25));//1
	monitorb.vertices.push(new THREE.Vector3(6.25,0.8,0.25));//0
	
	monitorb.vertices.push(new THREE.Vector3(6,1.5,0));//3
	monitorb.vertices.push(new THREE.Vector3(5,1.5,1));//2
	monitorb.vertices.push(new THREE.Vector3(5.25,1.5,1.25));//1
	monitorb.vertices.push(new THREE.Vector3(6.25,1.5,0.25));//0
	
	pantallab.vertices.push(new THREE.Vector3(6,0.8,0));//3
	pantallab.vertices.push(new THREE.Vector3(5,0.8,1));//2
	pantallab.vertices.push(new THREE.Vector3(5.25,0.8,1.25));//1
	pantallab.vertices.push(new THREE.Vector3(6.25,0.8,0.25));//0
	
	pantallab.vertices.push(new THREE.Vector3(6,1.5,0));//3
	pantallab.vertices.push(new THREE.Vector3(5,1.5,1));//2
	pantallab.vertices.push(new THREE.Vector3(5.25,1.5,1.25));//1
	pantallab.vertices.push(new THREE.Vector3(6.25,1.5,0.25));//0
	
	pizarra.vertices.push(new THREE.Vector3(2,0.6,6.9));//0
	pizarra.vertices.push(new THREE.Vector3(6,0.6,3));//1
	pizarra.vertices.push(new THREE.Vector3(2,2.5,6.9));//2
	pizarra.vertices.push(new THREE.Vector3(6,2.5,3));//3

	//CARAS
	pizarra.faces.push(new THREE.Face3( 0, 1, 3));
	pizarra.faces.push(new THREE.Face3( 0, 2, 3));
	pizarra.faces.push(new THREE.Face3( 0, 3, 1));
	pizarra.faces.push(new THREE.Face3( 0, 3, 2));
	
	pantallab.faces.push(new THREE.Face3( 2, 3, 6));
	pantallab.faces.push(new THREE.Face3( 3, 7, 6));
	pantallab.faces.push(new THREE.Face3( 2, 6, 3));
	pantallab.faces.push(new THREE.Face3( 3, 6, 7));

	monitorb.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitorb.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitorb.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitorb.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitorb.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitorb.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitorb.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitorb.faces.push( new THREE.Face3( 4, 6, 7 ) );
	monitorb.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitorb.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitorb.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitorb.faces.push( new THREE.Face3( 0, 4, 7 ) );
	monitorb.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitorb.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitorb.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitorb.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitorb.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitorb.faces.push( new THREE.Face3( 0, 7, 4 ) );
	monitorb.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitorb.faces.push( new THREE.Face3( 6, 5, 1 ) );
	
	pc0.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc0.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc0.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc0.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc0.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc0.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc0.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc0.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc0.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc0.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc0.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc0.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc0.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc0.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc0.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc0.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc0.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc0.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc0.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc0.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc3.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc3.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc3.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc3.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc3.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc3.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc3.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc3.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc3.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc3.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc3.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc3.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc3.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc3.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc3.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc3.faces.push( new THREE.Face3( 0, 7, 4 ) );	
	pc3.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc3.faces.push( new THREE.Face3( 1, 6, 5 ) );

	pc4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc4.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc4.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc4.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc4.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc4.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc4.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc4.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc4.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc4.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc4.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc4.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc4.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc4.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc4.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc4.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc4.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc4.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc4.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc4.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc5.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc5.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc5.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc5.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc5.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc5.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc5.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc5.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc5.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc5.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc5.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc5.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc5.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc5.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc5.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc5.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc5.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc5.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc5.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc6.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc6.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc6.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc6.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc6.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc6.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc6.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc6.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc6.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc6.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc6.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc6.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc6.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc6.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc6.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc6.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc6.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc6.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc6.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc6.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc7.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc7.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc7.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc7.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc7.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc7.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc7.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc7.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc7.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc7.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc7.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc7.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc7.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc7.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc7.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc7.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc7.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc7.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc7.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc7.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc8.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc8.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc8.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc8.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc8.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc8.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc8.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc8.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc8.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc8.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc8.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc8.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc8.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc8.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc8.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc8.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc8.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc8.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc8.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc8.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc9.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc9.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc9.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc9.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc9.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc9.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc9.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc9.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc9.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc9.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc9.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc9.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc9.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc9.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc9.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc9.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc9.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc9.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc9.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc9.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc10.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc10.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc10.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc10.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc10.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc10.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc10.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc10.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc10.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc10.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc10.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc10.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc10.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc10.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc10.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc10.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc10.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc10.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc10.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc10.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc11.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc11.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc11.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc11.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc11.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc11.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc11.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc11.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc11.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc11.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc11.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc11.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc11.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc11.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc11.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc11.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc11.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc11.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc11.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc11.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc12.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc12.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc12.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc12.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc12.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc12.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc12.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc12.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc12.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc12.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc12.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc12.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc12.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc12.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc12.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc12.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc12.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc12.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc12.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc12.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc13.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc13.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc13.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc13.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc13.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc13.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc13.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc13.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc13.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc13.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc13.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc13.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc13.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc13.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc13.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc13.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc13.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc13.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc13.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc13.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc14.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc14.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc14.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc14.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc14.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc14.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc14.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc14.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc14.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc14.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc14.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc14.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc14.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc14.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc14.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc14.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc14.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc14.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc14.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc14.faces.push( new THREE.Face3( 6, 5, 1 ) );

	pc15.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc15.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc15.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc15.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc15.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc15.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc15.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc15.faces.push( new THREE.Face3( 4, 6, 7 ) );
	pc15.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc15.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc15.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc15.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pc15.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc15.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pc15.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc15.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc15.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc15.faces.push( new THREE.Face3( 0, 7, 4 ) );
	pc15.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc15.faces.push( new THREE.Face3( 6, 5, 1 ) );

	//mesa0.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa0.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa0.faces.push( new THREE.Face3( 0, 2, 1 ) );
	//mesa0.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa0.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa0.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa0.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa0.faces.push( new THREE.Face3( 4, 6, 7 ) );

	mesa0.faces.push( new THREE.Face3( 0, 4, 1 ) );
	mesa0.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa0.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa0.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa0.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa0.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa0.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa0.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	mesa0.faces.push( new THREE.Face3( 0, 1, 4 ) );
	mesa0.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa0.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa0.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa0.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa0.faces.push( new THREE.Face3( 1, 6, 5 ) );

	//PANTALLAS
	pantalla1.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla1.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla1.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla1.faces.push(new THREE.Face3( 3, 6, 7));
	
	pantalla2.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla2.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla2.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla2.faces.push(new THREE.Face3( 3, 6, 7));
	
	pantalla3.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla3.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla3.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla3.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla4.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla4.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla4.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla4.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla5.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla5.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla5.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla5.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla6.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla6.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla6.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla6.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla7.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla7.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla7.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla7.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla8.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla8.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla8.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla8.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla9.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla9.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla9.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla9.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla10.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla10.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla10.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla10.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla11.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla11.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla11.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla11.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla12.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla12.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla12.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla12.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla13.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla13.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla13.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla13.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla14.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla14.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla14.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla14.faces.push(new THREE.Face3( 3, 6, 7));

	pantalla15.faces.push(new THREE.Face3( 2, 3, 6));
	pantalla15.faces.push(new THREE.Face3( 3, 7, 6));
	pantalla15.faces.push(new THREE.Face3( 2, 6, 3));
	pantalla15.faces.push(new THREE.Face3( 3, 6, 7));

	monitor2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor2.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor2.faces.push( new THREE.Face3( 1, 6, 5 ) );
	
	monitor3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor3.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor3.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor3.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor3.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor3.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor3.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor3.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor3.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor3.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor3.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor3.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor3.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor3.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor3.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor3.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor3.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor3.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor3.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor3.faces.push( new THREE.Face3( 1, 6, 5 ) );


	monitor.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor4.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor4.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor4.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor4.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor4.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor4.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor4.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor4.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor4.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor4.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor4.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor4.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor4.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor4.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor4.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor4.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor4.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor4.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor4.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor5.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor5.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor5.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor5.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor5.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor5.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor5.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor5.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor5.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor5.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor5.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor5.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor5.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor5.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor5.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor5.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor5.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor5.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor5.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor6.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor6.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor6.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor6.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor6.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor6.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor6.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor6.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor6.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor6.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor6.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor6.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor6.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor6.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor6.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor6.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor6.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor6.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor6.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor6.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor7.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor7.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor7.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor7.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor7.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor7.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor7.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor7.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor7.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor7.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor7.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor7.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor7.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor7.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor7.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor7.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor7.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor7.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor7.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor7.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor8.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor8.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor8.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor8.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor8.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor8.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor8.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor8.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor8.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor8.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor8.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor8.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor8.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor8.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor8.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor8.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor8.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor8.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor8.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor8.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor9.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor9.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor9.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor9.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor9.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor9.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor9.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor9.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor9.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor9.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor9.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor9.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor9.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor9.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor9.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor9.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor9.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor9.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor9.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor9.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor10.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor10.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor10.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor10.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor10.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor10.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor10.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor10.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor10.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor10.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor10.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor10.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor10.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor10.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor10.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor10.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor10.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor10.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor10.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor10.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor11.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor11.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor11.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor11.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor11.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor11.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor11.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor11.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor11.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor11.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor11.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor11.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor11.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor11.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor11.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor11.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor11.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor11.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor11.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor11.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor12.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor12.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor12.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor12.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor12.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor12.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor12.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor12.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor12.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor12.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor12.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor12.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor12.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor12.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor12.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor12.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor12.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor12.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor12.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor12.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor13.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor13.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor13.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor13.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor13.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor13.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor13.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor13.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor13.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor13.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor13.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor13.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor13.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor13.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor13.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor13.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor13.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor13.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor13.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor13.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor14.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor14.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor14.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor14.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor14.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor14.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor14.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor14.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor14.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor14.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor14.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor14.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor14.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor14.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor14.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor14.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor14.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor14.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor14.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor14.faces.push( new THREE.Face3( 1, 6, 5 ) );

	monitor15.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor15.faces.push( new THREE.Face3( 0, 3, 2 ) );
	monitor15.faces.push( new THREE.Face3( 0, 2, 1 ) );
	monitor15.faces.push( new THREE.Face3( 0, 2, 3 ) );
	monitor15.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor15.faces.push( new THREE.Face3( 4, 7, 6 ) );
	monitor15.faces.push( new THREE.Face3( 4, 6, 5 ) );
	monitor15.faces.push( new THREE.Face3( 4, 6, 7 ) );

	monitor15.faces.push( new THREE.Face3( 0, 4, 1 ) );
	monitor15.faces.push( new THREE.Face3( 1, 5, 4 ) );
	monitor15.faces.push( new THREE.Face3( 0, 3, 7 ) );
	monitor15.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	monitor15.faces.push( new THREE.Face3( 1, 2, 6 ) );
	monitor15.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor15.faces.push( new THREE.Face3( 0, 1, 4 ) );
	monitor15.faces.push( new THREE.Face3( 1, 4, 5 ) );
	monitor15.faces.push( new THREE.Face3( 0, 7, 3 ) );
	monitor15.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	monitor15.faces.push( new THREE.Face3( 1, 6, 2 ) );
	monitor15.faces.push( new THREE.Face3( 1, 6, 5 ) );


//PC2
	pc2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc2.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	pc2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	pc2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc2.faces.push( new THREE.Face3( 1, 5, 6 ) );
	
	pc2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	pc2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc2.faces.push( new THREE.Face3( 1, 6, 5 ) );

//PC
	pc.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pc.faces.push( new THREE.Face3( 0, 3, 2 ) );
	pc.faces.push( new THREE.Face3( 0, 2, 1 ) );
	pc.faces.push( new THREE.Face3( 0, 2, 3 ) );
	pc.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pc.faces.push( new THREE.Face3( 4, 7, 6 ) );
	pc.faces.push( new THREE.Face3( 4, 6, 5 ) );
	pc.faces.push( new THREE.Face3( 4, 6, 7 ) );

	pc.faces.push( new THREE.Face3( 0, 4, 1 ) );
	pc.faces.push( new THREE.Face3( 1, 5, 4 ) );
	pc.faces.push( new THREE.Face3( 0, 3, 7 ) );
	pc.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	pc.faces.push( new THREE.Face3( 1, 2, 6 ) );
	pc.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	pc.faces.push( new THREE.Face3( 0, 1, 4 ) );
	pc.faces.push( new THREE.Face3( 1, 4, 5 ) );
	pc.faces.push( new THREE.Face3( 0, 7, 3 ) );
	pc.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	pc.faces.push( new THREE.Face3( 1, 6, 2 ) );
	pc.faces.push( new THREE.Face3( 1, 6, 5 ) );


//MESA
	//mesa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	//mesa.faces.push( new THREE.Face3( 0, 3, 2 ) );
	//mesa.faces.push( new THREE.Face3( 0, 2, 1 ) );
	//mesa.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa.faces.push( new THREE.Face3( 4, 6, 7 ) );

	//mesa.faces.push( new THREE.Face3( 0, 4, 1 ) );
	//mesa.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	//mesa.faces.push( new THREE.Face3( 0, 1, 4 ) );
	//mesa.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa.faces.push( new THREE.Face3( 1, 6, 5 ) );
//	mesa.faces.push( new THREE.Face3( 2, 7, 3 ) );
//	mesa.faces.push( new THREE.Face3( 2, 7, 6 ) );
	
	//MESA2
	//mesa2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	//mesa2.faces.push( new THREE.Face3( 0, 3, 2 ) );
	//mesa2.faces.push( new THREE.Face3( 0, 2, 1 ) );
	//mesa2.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa2.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa2.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa2.faces.push( new THREE.Face3( 4, 6, 7 ) );

	//mesa2.faces.push( new THREE.Face3( 0, 4, 1 ) );
	//mesa2.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa2.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa2.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa2.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa2.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa2.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	//mesa2.faces.push( new THREE.Face3( 0, 1, 4 ) );
	//mesa2.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa2.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa2.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa2.faces.push( new THREE.Face3( 1, 6, 5 ) );
//	mesa2.faces.push( new THREE.Face3( 2, 7, 3 ) );
//	mesa2.faces.push( new THREE.Face3( 2, 7, 6 ) );

//MESA3
	//mesa3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	//mesa3.faces.push( new THREE.Face3( 0, 3, 2 ) );
	//mesa3.faces.push( new THREE.Face3( 0, 2, 1 ) );
	//mesa3.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa3.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa3.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa3.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa3.faces.push( new THREE.Face3( 4, 6, 7 ) );

	//mesa3.faces.push( new THREE.Face3( 0, 4, 1 ) );
	//mesa3.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa3.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa3.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa3.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa3.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa3.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa3.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	//mesa3.faces.push( new THREE.Face3( 0, 1, 4 ) );
	//mesa3.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa3.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa3.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa3.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa3.faces.push( new THREE.Face3( 1, 6, 5 ) );
//	mesa3.faces.push( new THREE.Face3( 2, 7, 3 ) );
//	mesa3.faces.push( new THREE.Face3( 2, 7, 6 ) );

//MESA4
	//mesa4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	//mesa4.faces.push( new THREE.Face3( 0, 3, 2 ) );
	//mesa4.faces.push( new THREE.Face3( 0, 2, 1 ) );
	//mesa4.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mesa4.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa4.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa4.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa4.faces.push( new THREE.Face3( 4, 6, 7 ) );

	//mesa4.faces.push( new THREE.Face3( 0, 4, 1 ) );
	//mesa4.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa4.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa4.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa4.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa4.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa4.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa4.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	//mesa4.faces.push( new THREE.Face3( 0, 1, 4 ) );
	//mesa4.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa4.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa4.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa4.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa4.faces.push( new THREE.Face3( 1, 6, 5 ) );
//	mesa4.faces.push( new THREE.Face3( 2, 7, 3 ) );
//	mesa4.faces.push( new THREE.Face3( 2, 7, 6 ) );

//MESA5
	/*mesa5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa5.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa5.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa5.faces.push( new THREE.Face3( 0, 2, 3 ) );*/

	mesa5.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa5.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa5.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa5.faces.push( new THREE.Face3( 4, 6, 7 ) );

	//mesa5.faces.push( new THREE.Face3( 0, 4, 1 ) );
	//mesa5.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa5.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa5.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa5.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa5.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa5.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa5.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	//mesa5.faces.push( new THREE.Face3( 0, 1, 4 ) );
	//mesa5.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa5.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa5.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa5.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa5.faces.push( new THREE.Face3( 1, 6, 5 ) );
//	mesa5.faces.push( new THREE.Face3( 2, 7, 3 ) );
//	mesa5.faces.push( new THREE.Face3( 2, 7, 6 ) );

//MESA6
	/*mesa6.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mesa6.faces.push( new THREE.Face3( 0, 3, 2 ) );
	mesa6.faces.push( new THREE.Face3( 0, 2, 1 ) );
	mesa6.faces.push( new THREE.Face3( 0, 2, 3 ) );*/

	mesa6.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mesa6.faces.push( new THREE.Face3( 4, 7, 6 ) );
	mesa6.faces.push( new THREE.Face3( 4, 6, 5 ) );
	mesa6.faces.push( new THREE.Face3( 4, 6, 7 ) );

	//mesa6.faces.push( new THREE.Face3( 0, 4, 1 ) );
	//mesa6.faces.push( new THREE.Face3( 1, 5, 4 ) );
	mesa6.faces.push( new THREE.Face3( 0, 3, 7 ) );
	mesa6.faces.push( new THREE.Face3( 0, 4, 7 ) );
	
	mesa6.faces.push( new THREE.Face3( 1, 2, 6 ) );
	mesa6.faces.push( new THREE.Face3( 1, 5, 6 ) );
//	mesa6.faces.push( new THREE.Face3( 2, 3, 7 ) );
//	mesa6.faces.push( new THREE.Face3( 2, 6, 7 ) );
	
	//mesa6.faces.push( new THREE.Face3( 0, 1, 4 ) );
	//mesa6.faces.push( new THREE.Face3( 1, 4, 5 ) );
	mesa6.faces.push( new THREE.Face3( 0, 7, 3 ) );
	mesa6.faces.push( new THREE.Face3( 0, 7, 4 ) );
	
	mesa6.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mesa6.faces.push( new THREE.Face3( 1, 6, 5 ) );
//	mesa6.faces.push( new THREE.Face3( 2, 7, 3 ) );
//	mesa6.faces.push( new THREE.Face3( 2, 7, 6 ) );

//PAREDES LABORATORIO
    labo.faces.push( new THREE.Face3( 0, 1, 2 ) );
	labo.faces.push( new THREE.Face3( 0, 2, 1 ) );
	labo.faces.push( new THREE.Face3( 0, 3, 2 ) );
	labo.faces.push( new THREE.Face3( 0, 2, 3 ) );
    labo.faces.push( new THREE.Face3( 4, 5, 6 ) );
	labo.faces.push( new THREE.Face3( 4, 7, 6 ) );
	labo.faces.push( new THREE.Face3( 4, 6, 5 ) );
	labo.faces.push( new THREE.Face3( 4, 6, 7 ) );	
	
    labo.faces.push( new THREE.Face3( 0, 5, 6 ) );
	labo.faces.push( new THREE.Face3( 0, 3, 6 ) );
	labo.faces.push( new THREE.Face3( 0, 6, 5 ) );
	labo.faces.push( new THREE.Face3( 0, 6, 3 ) );

    labo.faces.push( new THREE.Face3( 0, 4, 5 ) );
	labo.faces.push( new THREE.Face3( 0, 1, 4 ) );
	labo.faces.push( new THREE.Face3( 0, 5, 4 ) );
	labo.faces.push( new THREE.Face3( 0, 4, 1 ) );	
	
	labo.faces.push(new THREE.Face3(4,8,9));
	labo.faces.push(new THREE.Face3(4,9,8));
	labo.faces.push(new THREE.Face3(1,10,11));
	labo.faces.push(new THREE.Face3(1,11,10));
	
	labo.faces.push(new THREE.Face3(1,2,11));
	labo.faces.push(new THREE.Face3(1,11,2));
	labo.faces.push(new THREE.Face3(4,7,9));		
	labo.faces.push(new THREE.Face3(4,9,7));

	piso.vertices.push(new THREE.Vector3(9,0.01,0));//0
	piso.vertices.push(new THREE.Vector3(0,0.01,9));//1
	piso.vertices.push(new THREE.Vector3(-1,0.01,-10));//2
	piso.vertices.push(new THREE.Vector3(-10,0.01,-1));//3
	piso.faces.push( new THREE.Face3( 0, 3, 1 ) );
	piso.faces.push( new THREE.Face3( 0, 3, 2 ) );
	piso.faces.push( new THREE.Face3( 0, 1, 3 ) );
	piso.faces.push( new THREE.Face3( 0, 2, 3 ) );

	//MATERIALES
	var labomat=new THREE.MeshBasicMaterial({color: 0xECC554});
	var labo11= new THREE.Mesh (labo,labomat);
	var pisomat=new THREE.MeshBasicMaterial({color: 0xC4C4C4});
	var piso11=new THREE.Mesh (piso,pisomat);
	var mesamat=new THREE.MeshBasicMaterial({color : 0x732B00});
	var mesa11=new THREE.Mesh(mesa,mesamat);
	var mesa12=new THREE.Mesh(mesa2,mesamat);
	var mesa13=new THREE.Mesh(mesa3,mesamat);
	var mesa14=new THREE.Mesh(mesa4,mesamat);
	var mesa15=new THREE.Mesh(mesa5,mesamat);
	var mesa16=new THREE.Mesh(mesa6,mesamat);
	var pcmat=new THREE.MeshBasicMaterial({color: 0x24262A});
	var opc=new THREE.Mesh(pc, pcmat);
	var opc2=new THREE.Mesh(pc2, pcmat);
	var opc3=new THREE.Mesh(pc3, pcmat);
	var opc4=new THREE.Mesh(pc4, pcmat);
	var opc5=new THREE.Mesh(pc5, pcmat);
	var opc6=new THREE.Mesh(pc6, pcmat);
	var opc7=new THREE.Mesh(pc7, pcmat);
	var opc8=new THREE.Mesh(pc8, pcmat);
	var opc9=new THREE.Mesh(pc9, pcmat);
	var opc10=new THREE.Mesh(pc10, pcmat);
	var opc11=new THREE.Mesh(pc11, pcmat);
	var opc12=new THREE.Mesh(pc12, pcmat);
	var opc13=new THREE.Mesh(pc13, pcmat);
	var opc14=new THREE.Mesh(pc14, pcmat);
	var opc15=new THREE.Mesh(pc15, pcmat);
	var monitormat=new THREE.MeshBasicMaterial({color: 0x555555});
	var screen1=new THREE.Mesh(monitor, monitormat);
	var screen2=new THREE.Mesh(monitor2, monitormat);
	var screen3=new THREE.Mesh(monitor3, monitormat);
	var screen4=new THREE.Mesh(monitor4, monitormat);
	var screen5=new THREE.Mesh(monitor5, monitormat);
	var screen6=new THREE.Mesh(monitor6, monitormat);
	var screen7=new THREE.Mesh(monitor7, monitormat);
	var screen8=new THREE.Mesh(monitor8, monitormat);
	var screen9=new THREE.Mesh(monitor9, monitormat);
	var screen10=new THREE.Mesh(monitor10, monitormat);
	var screen11=new THREE.Mesh(monitor11, monitormat);
	var screen12=new THREE.Mesh(monitor12, monitormat);
	var screen13=new THREE.Mesh(monitor13, monitormat);
	var screen14=new THREE.Mesh(monitor14, monitormat);
	var screen15=new THREE.Mesh(monitor15, monitormat);
	var pantallamat=new THREE.MeshBasicMaterial({color: 0x080808});
	var pantallac=new THREE.Mesh(pantalla1, pantallamat);
	var pantallac2=new THREE.Mesh(pantalla2, pantallamat);
	var pantallac3=new THREE.Mesh(pantalla3, pantallamat);
	var pantallac4=new THREE.Mesh(pantalla4, pantallamat);
	var pantallac5=new THREE.Mesh(pantalla5, pantallamat);
	var pantallac6=new THREE.Mesh(pantalla6, pantallamat);
	var pantallac7=new THREE.Mesh(pantalla7, pantallamat);
	var pantallac8=new THREE.Mesh(pantalla8, pantallamat);
	var pantallac9=new THREE.Mesh(pantalla9, pantallamat);
	var pantallac10=new THREE.Mesh(pantalla10, pantallamat);
	var pantallac11=new THREE.Mesh(pantalla11, pantallamat);
	var pantallac12=new THREE.Mesh(pantalla12, pantallamat);
	var pantallac13=new THREE.Mesh(pantalla13, pantallamat);
	var pantallac14=new THREE.Mesh(pantalla14, pantallamat);
	var pantallac15=new THREE.Mesh(pantalla15, pantallamat);
	var mesaobj=new THREE.Mesh(mesa0,mesamat);
	var pc0obj=new THREE.Mesh(pc0,pcmat);
	var monitorobj=new THREE.Mesh(monitorb,monitormat);
	var pantallaobj=new THREE.Mesh(pantallab,pantallamat);
	var pizarramat=new THREE.MeshBasicMaterial({color: 0xE5DEDA});
	var pizarra11=new THREE.Mesh(pizarra, pizarramat);

	// SCENE
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	scene.add(pizarra11);
	scene.add(pantallaobj);
	scene.add(monitorobj);
	scene.add(pc0obj);
	scene.add(mesaobj);
	scene.add(pantallac2);	
	scene.add(pantallac3);
	scene.add(pantallac);
	scene.add(pantallac4);
	scene.add(pantallac5);
	scene.add(pantallac6);
	scene.add(pantallac7);
	scene.add(pantallac8);
	scene.add(pantallac9);
	scene.add(pantallac10);
	scene.add(pantallac11);
	scene.add(pantallac12);
	scene.add(pantallac13);
	scene.add(pantallac14);
	scene.add(pantallac15);
	scene.add(screen1);
	scene.add(screen2);
	scene.add(screen3);
	scene.add(screen4);
	scene.add(screen5);
	scene.add(screen6);
	scene.add(screen7);
	scene.add(screen8);
	scene.add(screen9);
	scene.add(screen10);
	scene.add(screen11);
	scene.add(screen12);
	scene.add(screen13);
	scene.add(screen14);
	scene.add(screen15);
	scene.add(opc);
	scene.add(opc2);
	scene.add(opc3);
	scene.add(opc4);
	scene.add(opc5);
	scene.add(opc6);
	scene.add(opc7);
	scene.add(opc8);
	scene.add(opc9);
	scene.add(opc10);
	scene.add(opc11);
	scene.add(opc12);
	scene.add(opc13);
	scene.add(opc14);
	scene.add(opc15);
	scene.add(mesa11);
	scene.add(mesa12);
	scene.add(mesa13);
	scene.add(mesa14);
	scene.add(mesa15);
	scene.add(mesa16);
	scene.add(labo11);
	scene.add(piso11);
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
