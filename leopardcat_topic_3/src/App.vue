<template>
  <div id="app">
    <Indicator></Indicator>
    <HeadBar
      projectHref="https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/"
      :outLinkList="outLinkList"
    ></HeadBar>
    <Content
      backgroundColor="#f9f9f9"
    >
      <Cover
        :coverImageMob="require('./assets/cover/mob_cover3_.jpg')"
        :coverImageWeb="require('./assets/cover/web_cover3_.jpg')"
        :titleSvg="require('./assets/cover/title3.svg')"
        href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/"
      >
        <div slot="title">
          <h2>開發案圍攻<br>「像插在石虎心臟的刀」</h2>
        </div>
        <div slot="text">
          <p>棲地破碎、消失是石虎族群面臨的嚴重威脅，現有最大相連的石虎棲地位於南苗栗，從通霄、三義、銅鑼、大湖到卓蘭連成一片，除有國道、省道貫穿切割，<strong>北有竹科銅鑼園區、南有環評中的裕隆開發案，加上各式山林道場、產業園區等，都位於這片棲地的正中間，石虎專家姜博仁形容「就像插在石虎心臟的一把刀」，嚴重衝擊石虎存續。</strong></p>
        </div>
      </Cover>
    </Content>
    <FullImage
      :imgSrcMob="require('./assets/img/mob_developement_.jpg')"
      :imgSrcWeb="require('./assets/img/web_developement_.jpg')"
      description="各項開發案鯨吞蠶食石虎棲地，讓石虎面臨生存威脅。資料來源／環保署環評書件查詢系統"
    >
    </FullImage>
    <Content>
      <h3>竹科銅鑼園區<br>蠶食石虎棲地</h3>
      <p><br></p>
      <p>各項開發案鯨吞蠶食石虎棲地，透過世界資源協會（WRI）、Google等合作推出的「全球森林觀察（Global Forest Watch）」網站，原本綠色的淺山林地消失，取而代之的是水泥化的人工建築，透過衛星影像都無所遁形。</p>
      <p><br></p>
      <p>該網站顯示，<strong>從2001年到2017年間，銅鑼西湖溪西側有片帶狀的丘陵地逐漸消失，取而代之的是U字形的彎曲道路，以及大面積的工業廠房，該處是竹科銅鑼園區</strong>，總開發面積350公頃，扣除保育區範圍，也有230公頃。</p>
    </Content>
    <ImageComparison
      :afterSrcMob="require('./assets/img/mob_2001_forest_.jpg')"
      :afterSrcWeb="require('./assets/img/web_2001_forest_.jpg')"
      :beforeSrcMob="require('./assets/img/mob_2017_forest_.jpg')"
      :beforeSrcWeb="require('./assets/img/web_2017_forest_.jpg')"
    >
      <div>苗栗縣森林消失的區塊，紫色區域代表森林覆蓋減少。從圖中可看出銅鑼西湖溪西側有兩塊綠色的林地消失，正是竹科銅鑼園區與裕隆開發案基地位置。資料來源／Global Forest Watch</div>
    </ImageComparison>
    <Content>
      <p>野聲環境生態顧問公司負責人姜博仁說，銅鑼園區就位於石虎重要棲地內，在園區北側、南側都有穩定的石虎族群，並累積大量的自動相機拍攝紀錄，甚至園區範圍內，早期也曾有石虎紀錄；他憂心周邊會發展成衛星市鎮，從園區擴散到鄰近山坡地，加上三義地區的觀光開發，將衝擊石虎棲地。</p>
      <p><br></p>
      <h3>裕隆擴廠<br>森林恐變驗證車道</h3>
      <p><br></p>
      <p>銅鑼園區往南約10公里處，一處數十公頃大的林地也逐漸消失，此處緊鄰裕隆汽車三義廠擴建基地；由於是石虎重要棲地，裕隆自願進入二階環評，從78公頃縮減為35公頃，尚未定案。縣府表示，裕隆5年前申請造林20多公頃，將老相思樹伐除，改種肖楠，目前樹高約1公尺，與擴廠案無關。</p>
    </Content>
    <ImageComparison
      :afterSrcMob="require('./assets/img/mob_Yue_Loong_2011_.jpg')"
      :afterSrcWeb="require('./assets/img/web_Yue_Loong_2011_.jpg')"
      :beforeSrcMob="require('./assets/img/mob_Yue_Loong_2014_.jpg')"
      :beforeSrcWeb="require('./assets/img/web_Yue_Loong_2014_.jpg')"
    >
      <div>擴廠前後的裕隆三義廠Google Earth衛星圖。</div>
    </ImageComparison>  
    <Content>
      <h3>苗栗山區<br>蓋大型道場、小木屋</h3>
      <p><br></p>
      <p>苗栗有不少山林道場，都位於淺山開發區域，其中已通過環評的<strong>寶吉祥佛寺、覺行寺，</strong>開發面積從1.6到1.9公頃不等，以及規模更大的<strong>擴大月稱光明寺宗教園區開發案</strong>，原本已興建14公頃的宏偉佛寺，第二期要再擴建34公頃，目前在二階環評中。</p>
      <p><br></p>
      <p><strong>記者走訪也發現淺山區有許多以農舍名義興建的小木屋，開發者買下整片山坡地，再游走法律邊緣，分割成兩分半的小單元蓋小木屋出售。</strong>開發、開路，又與逼退石虎、路殺形成惡性循環。</p>
      <p><br></p>
      <p>農委會特生中心近年調查南投的狀況也差不多，石虎分布熱區集中在中寮、集集，但頻繁的農耕、大面積廟宇開發等，也大幅縮減石虎棲地。</p>
    </Content>
    <FullImage
      :imgSrcMob="require('./assets/img/mob3-1.jpg')"
      :imgSrcWeb="require('./assets/img/web3-1.jpg')"
      description="石虎棲地正因私人開發案面臨破碎化危機。圖／特生中心提供"
    >
    </FullImage>
    <Content>
      <h3>瀕絕物種<br>爆不明原因位移</h3>
      <p><br></p>
      <p>苗栗的石虎棲地開發壓力大，東華大學環境學院教授裴家騏兩度調查發現，後龍、西湖拍到石虎的頻率降低，南通霄、苑裡、三義、銅鑼的密度增加，出現不明原因的族群密度位移現象，<strong>「對瀕絕物種而言，不明原因的族群大面積位移不是好事」，</strong>恐與後龍、西湖近年的開發有關。</p>
      <p><br></p>
      <h3>殯葬園區<br>在石虎熱區插旗</h3>
      <p><br></p>
      <p>保育團體指向<strong>後龍鎮的福祿壽殯葬園區開發案，幾十公頃的殯葬園區在石虎活動熱區插旗，</strong>即使有流血抗爭，農委會也三度行文苗縣府「建議」重新評估，環保署行文要求重啟環評，苗栗縣府仍一路開「綠燈」，2017年10月發給使用執照。</p>
      <p><br></p>
      <p>地方人士主張「地方要發展，不能用石虎就套住我們的土地」 ，導致中央到地方政府都未對殯葬園區展現積極作為。姜博仁說，生態棲地和廊道一個個被破壞、切斷，石虎很快就沒有明天了。</p>
    </Content>
    <Content>
      <Question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></Question>
      <p><br></p>
      <p><br></p>
      <Share href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/"></Share>
      <Logo></Logo>
      <p><br></p>
      <Editor>
        <div>採訪團隊：洪敬浤、胡蓬生、范榮達、黃瑞典、賴香珊、鄭朝陽</div>
        <div>影像：特生中心提供</div>
        <div>製作人：蔡佩蓉</div>
        <div>視覺設計：張心慈</div>
        <div>網頁製作：楊若榆、謝化挺</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.03.28</div>
      </Editor>
      <p><br></p>
      <Relate
        href1="https://udn.com/upf/newmedia/2019_data/leopardcat/topic1"
        :img1="require('./assets/relate/topic1_related.jpg')"
        text1="【誰殺了石虎之一】馬路變墳場 8年75隻石虎遭路殺"
        href2="https://udn.com/upf/newmedia/2019_data/leopardcat/topic2"
        :img2="require('./assets/relate/topic2_related.jpg')"
        text2="【誰殺了石虎之二】毀棲地蓋公園 官僚式前瞻計畫殺石虎"
        href3="https://udn.com/upf/newmedia/2019_data/leopardcat/topic4"
        :img3="require('./assets/relate/topic4_related.jpg')"
        text3="【誰殺了石虎之四】設動物生態廊道 給石虎一條安全回家的路"
        href4="https://udn.com/news/story/7324/3169494"
        :img4="require('./assets/relate/related_03.jpg')"
        text4="棲地、建設拔河 苗縣石虎條例退回重擬"
      >
      </Relate>
      <p><br></p>
      <FBComment href="https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/"></FBComment>
    </Content>
    <BackTop></BackTop>
    <Footer></Footer>
  </div>
</template>

<script>
import BackTop from '@/components/BackTop.vue'
import ColumnOne from '@/components/ColumnOne.vue'
import Content from '@/components/Content.vue'
import Cover from '@/components/Cover.vue'
import Editor from '@/components/Editor.vue'
import FBComment from '@/components/FBComment.vue'
import Footer from '@/components/Footer.vue'
import FullImage from '@/components/FullImage.vue'
import HeadBar from '@/components/HeadBar.vue'
import ImageComparison from '@/components/ImageComparison.vue'
import Indicator from '@/components/Indicator.vue'
import Logo from '@/components/Logo.vue'
import Question from '@/components/Question.vue'
import Relate from '@/components/Relate.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'app',
  components: {
    BackTop,
    ColumnOne,
    Content,
    Cover,
    Editor,
    FBComment,
    Footer,
    FullImage,
    HeadBar,
    ImageComparison,
    Indicator,
    Logo,
    Question,
    Relate,
    Share,
  },
  data() {
    return {
      outLinkList: [
        {
          name: '誰殺了石虎',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/',
        },
        {
          name: '路殺',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic1/',
        },
        {
          name: '官僚殺',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic2/',
        },
        {
          name: '開發案殺',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic3/',
        },
        {
          name: '拯救石虎',
          link: 'https://udn.com/upf/newmedia/2019_data/leopardcat/topic4/',
        },
      ],
    };
  },
}
</script>

<style>
  @import './assets/UdnFontSize.css';
</style>
<style lang="scss">
body {
  margin: 0;
}
#app {
  position: relative;
  text-align: justify;
}
h2 {
  font-weight: 800;
  font-size: 36px;
  @media screen and (min-width: 1024px) {
    font-size: 50px;
  }
}
h3 {
  font-weight: 800;
  line-height: 1.5;
}
</style>
