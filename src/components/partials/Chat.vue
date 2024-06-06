<script>
import {store} from '../../data/store.js';
import axios from 'axios';
  export default {
    data(){
      return{
        axios,
        store
      }
    }
  }
</script>
<template>
  <div>
    <div class="col right debug">

          <!-- topbar -->
          <div

            class="top d_flex pd_xs space_between dark debug">

            <div class="img d_flex al_center debug">
              <img :src="`assets${contacts[activeMessage].avatar}`" :alt="contacts[activeMessage].name" class="brd_radius">
              <div>
                <h4 class="pb_xs">{{contacts[activeMessage].name}}</h4>
                <p v-if="contacts[activeMessage].messages[contacts[activeMessage].messages.length - 1 ].status == 'received'">Ultimo accesso {{contacts[activeMessage].messages[contacts[activeMessage].messages.length - 1 ].date}} </p>
                <p v-else>Online</p>
              
              </div>
            </div>
            <nav class="d_flex f_end al_center none debug">
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-paperclip"></i>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </nav>
          </div>
          <!-- /topbar -->


          <!-- center  -->
          <div class="center dark">
            
            <div class="row padd_xl scroll padd_xl_min">

              
              
              <div
                v-for="(element,index) in contacts[activeMessage].messages "
                class="col d_flex mb_xs debug"
                :class="element.status === 'sent'? 'f_end' : ''">

                <!-- utilizzo la forma contratta per inserire la classe dinamicamente perchè gli status corrispondono ai nomi delle mie classi
                :class="element.status === 'sent'? 'sent' : 'received' " FORMA LUNGA CON TERNARIO -->
                <div
                  :class="element.status"
                  class="text_chat d_flex space_between  pos_rel">
                  <p class="pb_s pt_s">{{element.message}}</p>
                
                  <div class="icon pos_rel">
                    <i @click="idMessage(index)"
                    class="fa-solid fa-chevron-down"></i>
                    <ul class="box d_none box_shadow">
                      <li>Info messaggio</li>

                      <!-- BUG ULTIMO ELEMENTO DA CANCELLARE -->
                      <li 
                        @click.stop="deleteMess(index);idMessage(index)">Cancella messagio</li>
                      <li>Copia</li>
                      <li>Rispondi</li>
                      <li>Inoltra</li>
                    </ul>
                    
                  </div>
                  <div class="time pb_xs">{{element.date}}</div>
                  
                  </div>
                
              </div>

              
                
            </div>

          </div>
          <!-- /center  -->

          <!-- bottom bar -->
          <div class="bottom d_flex al_center dark">

            <div class="icon left text_c none">
              <i class="fa-regular fa-face-smile"></i>
            </div>

            <div class="text">
              <input
                v-model.trim ="newMessage" 
                @keyup.enter="addElement(),answerBot()"
                type="text"
                placeholder="Scrivi un messaggio">
            </div>

            <div class="icon right text_end none">
              <i class="fa-solid fa-microphone"></i>
            </div>

          </div>
          <!-- /bottom bar -->

          </div>
  </div>
</template>


<style lang="scss" scoped>

</style>