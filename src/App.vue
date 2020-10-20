<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    margin: 0 auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1250px;
    min-width: 1250px;
}
.header {
  top: 0px;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999999;
  background-color: #fff;
  height: 55px;
  align-items: center;
}

.body {
    color: #3e4448;
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0px 10px 24px 0;
    background-color: #fff;
    border-color: #cbced0;
    border-style: none;
    border-width: 1px 0;
    margin-bottom: 48px;

    .fx_title_content {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    border-left: #FD6DA9  solid 5px;
    color: #FD6DA9 ;
    line-height: 1.3;
    margin-bottom: 15px;
    padding: 0 4px 0 8px;
  }
  .fx_title_content_noborder {
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    color: #FD6DA9 ;
    line-height: 1.3;
    margin-bottom: 15px;
    padding: 0 4px 0 0px;
  }

  .fx_list {
    margin: 0 0 20px 20px;
  }
  .fx_ul_special {
    margin: 0 0 20px 20px;
    li {
      list-style: outside disc;
      margin-bottom: 5px;
    }
  }

    p {
      margin-top: 0px;
      margin-bottom: 20px;
    }

    ol, ul {
      list-style: none;
      padding-inline-start: 0px;
    }

    li {
      list-style: decimal;
    }
    .fx_generate_border {
      height: 1px;
      background-color: #ebeced;
    }
}
</style>
