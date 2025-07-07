const { createApp } = Vue;

createApp({
  data() {
    return {
      noticias: [
        {
          titulo: '¡Semifinales de infarto en el Mundial de Clubes 2025!',
          descripcion: 'Los cuartos de final del renovado Mundial de Clubes 2025 han llegado a su fin, dejando definidos a los cuatro equipos que lucharán por un lugar en la gran final. En un torneo que ha sorprendido con algunos resultados inesperados y grandes partidos, la emoción está garantizada para las semifinales. Los cruces confirmados son: Fluminense (Brasil) vs. Chelsea (Inglaterra) y Paris Saint-Germain (Francia) vs. Real Madrid (España).',
          imagen: src='img/semis_mundial.jpeg'
        },
        {
          titulo: 'Poco interés: la FIFA baja los precios de las entradas en una semi',
          descripcion: 'La escasa demanda de tickets generó una lógica del mercado: la baja de los precios.Para el match entre el campeón de la Copa Libertadores 2023 y el último ganador de la Conference League de Europa, los precios tuvieron una caída muy fuerte. Inicialmente, las entradas para los hinchas del Fluminense podían costar entre 108 dólares, las más baratas, hasta 766, las más caras. Con el nuevo anuncio de la FIFA, los precios oscilan entre 20 a 40 dólares. Esto puede verificarse en el sitio web oficial de venta, clubfans-fcwc25.tickets.fifa.com. Es más: cada hincha de Fluminense podrá comprar hasta diez tickets',
          imagen: src='img/hinchas_flu.jpg'
        },
        {
          titulo: 'Calendario confirmado: fechas y cruces',
          descripcion: 'Martes 8 de julio - 15:00 ET / 16:00 ARG: Chelsea vs. Fluminense (MetLife Stadium, New York) Miércoles 9 de julio - 15:00 ET / 16:00 ARG: PSG vs. Real Madrid (MetLife Stadium, New York)',
          imagen: src='img/metlife_stadium.jpg'
        },
        {
          titulo: '¿El Último Baile Mundialista de Messi?',
          descripcion: 'Con la clasificación de su equipo al próximo Mundial de Clubes, la sombra del retiro de Lionel Messi se alarga sobre el torneo. Este podría ser el último baile del astro argentino en la escena mundial de clubes, un evento cargado de emotividad para los aficionados. Cada partido se vivirá con la intensidad de un posible adiós, buscando una vez más la gloria que solo él puede alcanzar. ¿Será este su último gran título antes de colgar las botas? La expectación es máxima.',
          imagen: src='img/messi_mundial_clubes.jpeg'
        }
      ]
    }
  }
}).mount('#app');
