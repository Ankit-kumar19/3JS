
const scene = new THREE.Scene()

const geo = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'red'})
const mesh = new THREE.Mesh(geo, material)
scene.add(mesh)

//sizes
const size={
    width: 600,
    height:350

}


//camera
const camera = new THREE.PerspectiveCamera(75, size.width/size.height)
camera.position.z=3
scene.add(camera)

//rederer
const canvas = document.querySelector('.webgl')
// console.log(canvas);

const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})
renderer.setSize(size.width,size.height)

renderer.render(scene,camera)



