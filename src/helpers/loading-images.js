import foto from '../assets/yo.jpeg'
import proyecto1 from "../assets/proyecto1.jpg";
import proyecto2 from "../assets/proyecto2.jpg";
import proyecto3 from "../assets/proyecto3.jpg";
import proyecto4 from "../assets/proyecto4.jpg";
import proyecto5 from "../assets/proyecto5.jpg";
import proyecto6 from "../assets/proyecto6.jpg";
import loader from '../assets/loader.svg';


export default function insertImages(){
  const $foto = document.querySelector('.foto img');
  
  const [
    $proyecto1,
    $proyecto2,
    $proyecto3,
    $proyecto4,
    $proyecto5,
    $proyecto6 
  ] = document.querySelectorAll('.portfolio-card img');
  
  const [
    $proyectoModal1,
    $proyectoModal2,
    $proyectoModal3,
    $proyectoModal4,
    $proyectoModal5,
    $proyectoModal6 
  ] = document.querySelectorAll('.portfolio-modal img');
  
  const $loader = document.querySelector('.loader > img');

  //* Foto Acerca de mí
  $foto.src = foto; 

  //* Proyectos Portfolio
  $proyecto1.src = proyecto1;
  $proyecto2.src = proyecto2;
  // $proyecto3.src = proyecto3;
  $proyecto4.src = proyecto4;
  $proyecto5.src = proyecto5;
  $proyecto6.src = proyecto6;
  
  //* Proyectos Modal
  $proyectoModal1.src = proyecto1;
  $proyectoModal2.src = proyecto2;
  $proyectoModal3.src = proyecto3;
  $proyectoModal4.src = proyecto4;
  $proyectoModal5.src = proyecto5;
  $proyectoModal6.src = proyecto6;

  //* Loader
  $loader.src = loader;
  
}