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
            <!-- Colonna sinistra -->
            <div class="col left none debug">

                <!-- topbar -->
                <div class="top d_flex pd_xs dark debug">

                  <div class="img d_flex al_center fix-center debug">
                    <img src="assets/img/avatar_io.jpg" alt="" class="brd_radius">
                  </div>
                  <nav class="d_flex f_end al_center dis_none  debug">
                    <i class="fa-solid fa-circle-notch"></i>
                    <i class="fa-solid fa-message"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </nav>
                </div>
                <!-- /topbar  -->

                <!-- notifiche -->
                <div class="notification d_flex al_center dis_none dark debug">
                  <div class="icon">
                    <i class="fa-solid fa-bell-slash"></i>
                  </div>
                  <div class="text pr_s">
                    <p>Ricevi notifiche dei nuovi messaggi</p>
                    <p>Attiva notifiche desktop</p>
                  </div>
                </div>
                <!-- /notifiche -->

                <!-- searchbar -->
                <div class="search p_xs dis_none dark debug">

                  <div class="row">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                      @keyup="searchContact()"
                      v-model.trim="nameToSearch"
                      type="text"
                      placeholder="Cerca o inizia una nuova chat"
                      name="search">
                  </div>  

                </div>
                <!-- /seachbar -->

                <!-- chat -->
                <div class="chat dark debug">
                  
                  <div class="row scroll">
                    
                    <!-- stampiamo dinamicamente i contatti/chat  -->
                    <div
                    v-for="(contact,indice) in searchContact"
                    @click="activeMessage = indice "
                    v-show="contact.visible"
                    class="col d_flex space_between al_center fix-center">
                      <div class="d_flex al_center">
                        <div class="img">
                          <img :src="`assets${contact.avatar}`" :alt="contact.name" class="brd_radius">
                        </div>
                        <div class="text dis_none ">
                          <h4 class="pb_xs">{{contact.name}}</h4>
                          <p>{{contact.messages[contact.messages.length - 1 ].message}}</p>
                        </div>
                      </div>
                      <!-- BUG: mi prende la data e l'orario anche del messaggio inviato  -->
                      <div class="hour d_flex f_end al_start dis_none ">{{contact.messages[contact.messages.length - 1 ].date}}</div>
                    </div>


                  </div>
                  
                </div>
                <!-- /chat -->

                </div>
                <!-- /Colonna sinistra -->
  </div>
</template>


<style lang="scss" scoped>

</style>