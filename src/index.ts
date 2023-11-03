let mensaje : string ="Hola Mundo"

mensaje="Chanchito feliz"

mensaje="chao mundo"
console.log(mensaje)
console.log(typeof [])

//tipos de variables

let extincionDinosaurios: number=76_000_000
let dinosaurioFavorito = "T-Rex"
let extintos= true
let miVariable //no utilizar variable tipo Any

function chanchitoFeliz(config: any) {
    return config
}

let animales : string[]=['chanchito','feliz','felipe']
let nums: number[]=[1,2,3]
let checks: boolean[]=[]
let nums2: Array<number>=[]


//animales.map(x=> x.) //El autocompletado surgiere metodos del tipo de dato

let tupla:[number,string[]] = [1,['chanchito feliz','Perrito']]

const chica='s'
const mediana='m'
const grande='l'
const extraGrande='xl'

//PascalCase
enum Talla{Chica='s',Mediana='m',Grande='l',ExtraGrande='xl'}

const variable1=Talla.Grande
console.log(variable1)

const enum LoadingState{Idle,Loading,Success,Error}
const estado=LoadingState.Success

type Direccion={
    numero:number,
    calle:string,
    pais:string
}

type Persona={
    readonly id:number,
    nombre:string,    //se le puede poner un simbolo de interrogacion para no inicializarlo
    talla:Talla,
    direccion:Direccion

}
const objeto:Persona={
    id:1,
    nombre:'Hola Mundo',
    talla: Talla.Mediana,
    direccion:{
        numero:1,
        calle:'siempre viva',
        pais:'chanchitolandia'
    }
}

const arr:Persona[]=[]