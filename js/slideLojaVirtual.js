var lv_range=225; //deslocamento total (em px) cada clique = tamanho do item LI + margens;
var lv_fps=100; // frames por segundo (mais de 100 nao faz efeito) = delay=1000/fps
var lv_pixels=5; //pixels movidos a cada frame

//veriaveis de controle
var lv_d; // indica a direcao < ou >
var lv_x=0; //na movimentacao, quarda quantos px ja foram movidos. Zera quando chega no range
var lv_mover; //quantos pixels vai mover a cada frame ( para quando a divisao range/pixels nao for inteira )
var lv_list;
var lv_margin;
var lv_count;

function initSlide(){
  lv_list=document.getElementById('menuLv'); //obtem a UL que vai conter os itens
  lv_margin=lv_list.style.marginLeft;
  if (lv_margin) lv_margin=parseInt(lv_margin.substr(0,lv_margin.length-2)); else lv_margin=0; //obtem a margem do UL, retirando o px
  lv_count=(lv_list.getElementsByTagName('li')).length; //quantidade de itens na lista
}

function anterior(){
    lv_d="<";
    if (lv_x==0) {
      if (lv_margin==0) {
        li1=lv_list.getElementsByTagName('li')[0];
        li2=lv_list.getElementsByTagName('li')[lv_count-1];
        lv_list.removeChild(li2);
        lv_list.insertBefore(li2,li1)
        lv_margin=-225;
        lv_list.style.marginLeft=lv_margin+'px';
      }
      lv_start();
    }
}
function proximo(){
    lv_d=">";
    if (lv_x==0) { 
      if (lv_margin==-lv_range) {
        lv_list.removeChild(li=lv_list.getElementsByTagName('li')[0]);
        lv_margin=0;      
        lv_list.appendChild(li);
      }
      lv_start();
    }
}
function lv_start(){
    if (lv_x<lv_range){
       if ((lv_range-lv_x)<lv_pixels) lv_move=lv_range-lv_x; else lv_move=lv_pixels;
       if (lv_d==">") lv_margin-=lv_move; else lv_margin+=lv_move;
       lv_x+=lv_move;
       lv_list.style.marginLeft=lv_margin+'px';
       setTimeout("lv_start()",1000/lv_fps);
    } else
      lv_x=0;
}

