<script>
export default {
  name: 'SignUpPage'
}
</script>

<template>
<div class="sideNav">
    <div class="sideNav-header">
      <div class="sideNav-header-settings">
        <div class="sideNav-header-title">
          <div class="sideNav-header-title-team">Ágora Flow</div>            
        </div>
        <div class="sideNav-header-title-user">teste</div>
      </div>
    </div>
    <div class="sideNav-section-dashboard">
      <a class="sideNav-tab-container" href="#">
        <div class="sideNav-tab">
          <div class="sideNav-tab-icon-container">
            <svg class="entypo-svgicon entypo--Globe sideNav-tab-icon--dashboard" 
                 preserveAspectRatio="xMidYMid meet" 
                 viewBox="0 0 20 20" 
                 style="display: inline-block; height: 1em; width: 1em; fill: currentcolor; user-select: none; vertical-align: text-top;">
              <path d="M10,0.4c-5.295,0-9.601,4.307-9.601,9.6c0,5.293,4.306,9.6,9.601,9.6c5.293,0,9.6-4.307,9.6-9.6C19.6,4.707,15.293,0.4,10,0.4z M18.188,10c0,1.873-0.636,3.6-1.696,4.98c-0.3-0.234-0.619-0.867-0.319-1.523c0.303-0.66,0.382-2.188,0.312-2.783c-0.066-0.594-0.375-2.025-1.214-2.039c-0.838-0.012-1.413-0.289-1.911-1.283c-1.033-2.068,1.939-2.465,0.906-3.609c-0.289-0.322-1.783,1.322-2.002-0.869C12.25,2.717,12.399,2.482,12.6,2.238C15.844,3.328,18.188,6.395,18.188,10z M8.875,1.893C8.679,2.275,8.162,2.43,7.848,2.717C7.164,3.336,6.87,3.25,6.502,3.844C6.131,4.438,4.935,5.293,4.935,5.723s0.604,0.936,0.906,0.838c0.302-0.1,1.099-0.094,1.567,0.07c0.469,0.166,3.914,0.332,2.816,3.244c-0.348,0.926-1.873,0.77-2.279,2.303c-0.061,0.225-0.272,1.186-0.285,1.5c-0.025,0.486,0.344,2.318-0.125,2.318c-0.471,0-1.738-1.639-1.738-1.936c0-0.297-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062c0-1.068,0.823-1.6,0.638-2.113c-0.181-0.51-1.627-0.527-2.23-0.59C3.412,4.334,5.889,2.307,8.875,1.893z M7.424,17.77c0.492-0.26,0.542-0.596,0.988-0.613c0.51-0.023,0.925-0.199,1.5-0.326c0.51-0.111,1.423-0.629,2.226-0.695c0.678-0.055,2.015,0.035,2.375,0.689c-1.295,0.861-2.848,1.363-4.514,1.363C9.1,18.188,8.234,18.039,7.424,17.77z"></path>
            </svg>
          </div>
          <div class="sideNav-tab-title">Serviço 1</div>
        </div>
    </a>
    <a class="sideNav-tab-container" href="#">
      <div class="sideNav-tab">
        <div class="sideNav-tab-icon-container">
          <svg class="entypo-svgicon entypo--Unread sideNav-tab-icon--dashboard" 
               preserveAspectRatio="xMidYMid meet" 
               viewBox="0 0 20 20" 
               style="display: inline-block; height: 1em; width: 1em; fill: currentcolor; user-select: none; vertical-align: text-top;">
            <path d="M17,3c-1.104,0-2,0.895-2,2c0,1.105,0.896,2,2,2s2-0.895,2-2C19,3.895,18.104,3,17,3z M12.5,4h-11C1.224,4,1,4.224,1,4.5v1C1,5.776,1.224,6,1.5,6h11C12.776,6,13,5.776,13,5.5v-1C13,4.224,12.776,4,12.5,4z M12.5,9h-11C1.224,9,1,9.224,1,9.5v1C1,10.776,1.224,11,1.5,11h11c0.276,0,0.5-0.224,0.5-0.5v-1C13,9.224,12.776,9,12.5,9z M12.5,14h-11C1.224,14,1,14.224,1,14.5v1C1,15.776,1.224,16,1.5,16h11c0.276,0,0.5-0.224,0.5-0.5v-1C13,14.224,12.776,14,12.5,14z">
            </path>
          </svg>
        </div>
        <div class="sideNav-tab-title"> Serviço 2</div>
      </div>
    </a>
    <a class="sideNav-tab-container" href="#">
      <div class="sideNav-tab">
        <div class="sideNav-tab-icon-container">
          <svg class="entypo-svgicon entypo--List sideNav-tab-icon--dashboard" 
               preserveAspectRatio="xMidYMid meet" 
               viewBox="0 0 20 20" 
               style="display: inline-block; height: 1em; width: 1em; fill: currentcolor; user-select: none; vertical-align: text-top;">
            <path d="M14.4,9H8.6C8.048,9,8,9.447,8,10s0.048,1,0.6,1H14.4c0.552,0,0.6-0.447,0.6-1S14.952,9,14.4,9z M16.4,14H8.6C8.048,14,8,14.447,8,15s0.048,1,0.6,1H16.4c0.552,0,0.6-0.447,0.6-1S16.952,14,16.4,14z M8.6,6H16.4C16.952,6,17,5.553,17,5s-0.048-1-0.6-1H8.6C8.048,4,8,4.447,8,5S8.048,6,8.6,6z M5.4,9H3.6C3.048,9,3,9.447,3,10s0.048,1,0.6,1H5.4C5.952,11,6,10.553,6,10S5.952,9,5.4,9z M5.4,14H3.6C3.048,14,3,14.447,3,15s0.048,1,0.6,1H5.4C5.952,16,6,15.553,6,15S5.952,14,5.4,14z M5.4,4H3.6C3.048,4,3,4.447,3,5s0.048,1,0.6,1H5.4C5.952,6,6,5.553,6,5S5.952,4,5.4,4z">
            </path>
          </svg>
        </div>
        <div class="sideNav-tab-title">Serviço 3</div>
      </div>
    </a>
    <a class="sideNav-tab-container is-active" id="dropdownBtn" >
      <div class="sideNav-tab dropdown" onclick="openDropdown()" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
        <div class="sideNav-tab-icon-container">
          <svg class="entypo-svgicon entypo--TextDocument sideNav-tab-icon--dashboard" 
               preserveAspectRatio="xMidYMid meet" 
               viewBox="0 0 20 20" 
               style="display: inline-block; height: 1em; width: 1em; fill: currentcolor; user-select: none; vertical-align: text-top;">
            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z">
            </path>
          </svg>
        </div>
        <div class="sideNav-tab-title">Serviço 4
          <svg class="entypo-svgicon entypo--ChevronDown dropBtn" 
               preserveAspectRatio="xMidYMid meet" 
               viewBox="0 0 20 20" 
               style="display: inline-block; height: 1em; width: 1em; fill: currentcolor;">
            <path d="M4.516,7.548c0.436-0.446,1.043-0.481,1.576,0L10,11.295l3.908-3.747c0.533-0.481,1.141-0.446,1.574,0c0.436,0.445,0.408,1.197,0,1.615c-0.406,0.418-4.695,4.502-4.695,4.502C10.57,13.888,10.285,14,10,14s-0.57-0.112-0.789-0.335c0,0-4.287-4.084-4.695-4.502C4.107,8.745,4.08,7.993,4.516,7.548z">
            </path>
          </svg>
        </div>
        <div class="sideNav-tab dropdown-content" id="submenu" >
          <a href="#" class="sideNav-tab-title">Serviço 5</a>
          <a href="#" class="sideNav-tab-title">Serviço 6</a>
        </div>
      </div>
    </a>
    <a class="sideNav-tab-container" href="#">
      <div class="sideNav-tab">
        <div class="sideNav-tab-icon-container">
          <svg class="entypo-svgicon entypo--Mail sideNav-tab-icon--dashboard" 
               preserveAspectRatio="xMidYMid meet" 
               viewBox="0 0 20 20" 
               style="display: inline-block; height: 1em; width: 1em; fill: currentcolor; user-select: none; vertical-align: text-top;">
            <path d="M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514c0.328,0,0.654-0.064,0.906-0.199s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z M18.613,7.489c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z">
            </path>
          </svg>
        </div>
        <div class="sideNav-tab-title">Emails</div>
      </div>
    </a>
    <a class="sideNav-tab-container" href="#">
      <div class="sideNav-tab">
        <div class="sideNav-tab-icon-container">
          <svg class="direction sideNav-tab-icon--dashboard" 
               version="1.1" 
               xmlns="http://www.w3.org/2000/svg" 
               xmlns:xlink="http://www.w3.org/1999/xlink" 
               x="0px" y="0px" 
               viewBox="0 0 51.636 51.636" 
               xml:space="preserve" 
               style="transform: rotate(0deg); width: 16px; height: 16px; fill: currentcolor; z-index: 0;">
            <g>
              <path d="M51.353,0.914c-0.295-0.305-0.75-0.39-1.135-0.213L0.583,23.481c-0.399,0.184-0.632,0.605-0.574,1.041  s0.393,0.782,0.826,0.854l22.263,3.731l2.545,21.038c0.054,0.438,0.389,0.791,0.824,0.865c0.057,0.01,0.113,0.015,0.169,0.015  c0.375,0,0.726-0.211,0.896-0.556l24-48.415C51.72,1.675,51.648,1.218,51.353,0.914z">
              </path>
            </g>
          </svg>
        </div>
        <div class="sideNav-tab-title">Messages</div>
      </div>
    </a>
   </div>
</div>
</template>

<style scoped>
    @import '../../styles.scss';
</style>
