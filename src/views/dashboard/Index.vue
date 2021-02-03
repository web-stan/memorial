<template>
  <div class="dashboard">
    <Header />

    <div class="dashboard__content">
      <div class="dashboard__user">
        <div class="dashboard__avatar">
          <img src="~@/assets/img/dashboard-avatar-main.svg" alt="avatar">
        </div>
        <h1 class="dashboard__user-name">שלום עופר ברוידא</h1>
      </div>

      <div class="dashboard__sites">
        <div class="dashboard__site">
          <div class="site__info">
            <div class="info-wrapper">
              <div class="site__avatar">
                <img src="~@/assets/img/memorial.png" alt="avatar">
              </div>

              <div class="site__user">
                <div class="site__user-name">סא״ל יוסי קורקין</div>
                <div class="site__user-years"><span>1964</span> - <span>1997</span></div>
              </div>
            </div>

            <div class="manage-wrapper">
              <div class="site__manage"></div>
            </div>
          </div>
          <div class="site__content">
            <div class="site__header">
              <span class="site__label">אתר הנצחה</span>
            </div>

            <div class="site__memorial">
              <div class="memorial__description">
                <div class="memorial__date">
                  <span class="memorial__label">נוצר בתאריך:</span>
                  <span class="memorial__value">12/05/2020</span>
                </div>
                <div class="memorial__subsription">
                  <span class="memorial__label">תכנית:</span>
                  <span class="memorial__value">מנוי חודשי 25 ₪ לחודש</span>
                </div>
              </div>

              <div class="memorial__control">
                <div class="btn btn__second btn-edit">
                  <span>עריכת האתר</span>
                </div>

                <div class="btn btn__second btn-preview">
                  <span>צפייה באתר</span>
                </div>

                <div class="btn btn__create btn-add">
                  <span class="plus plus-blue"></span>
                  <span>הוסף סיפור</span>
                </div>
              </div>
            </div>

            <div class="site__stories">
              <div class="stories__info">
                <div class="stories__control">
                  <div :ref="`stories1-right`" :class="['control__right', {'disabled': false || isDisabled('stories1')}]" @click.prevent="slideNext('stories1', false || isDisabled('stories1'))">
                    <span class="icon icon__arrow right carousel-arrow" @click.prevent="slideNext('stories1', false || isDisabled('stories1'))"></span>
                  </div>
                  <span :class="['separator', {'disabled': false}]"></span>
                  <div :ref="`stories1-left`" :class="['control__left', {'disabled': false || isDisabled('stories1')}]" @click.prevent="slidePrev('stories1', false || isDisabled('stories1'))">
                    <span class="icon icon__arrow carousel-arrow" @click.prevent="slidePrev('stories1', false || isDisabled('stories1'))"></span>
                  </div>
                </div>

                <div class="stories__label">
                  <div class="title">
                    <span class="text">סיפורים לאישור</span>
                    <span class="icon icon__info ask-icon"></span>
                  </div>
                  <div class="description">
                    <span class="text">סיפורים או תמונות וסרטונים שקרובים יצרו וצריכים לעבור את אישורך</span>
                  </div>

                </div>

                <div class="btn btn__second btn-add">
                  <span class="icon icon__add-blue add-icon"></span>
                  <span>הזמן קרובים</span>
                </div>
              </div>

              <div :class="['stories__items', {'notfound': false}]">
                <div
                  class="stories__item stories__notfound"
                  v-if="false"
                >
                  <span class="text">אין סיפורים חדשים</span>
                </div>

                <div
                  v-swiper:stories1="swiperOptions"
                  @slideChange="slideChange('stories1')"
                  ref="stories1"
                  v-else
                >
                  <div class="swiper-wrapper">
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dashboard__site">
          <div class="site__info">
            <div class="info-wrapper">
              <div class="site__avatar">
                <img src="~@/assets/img/memorial.png" alt="avatar">
              </div>

              <div class="site__user">
                <div class="site__user-name">סא״ל יוסי קורקין</div>
                <div class="site__user-years"><span>1964</span> - <span>1997</span></div>
              </div>
            </div>

            <div class="manage-wrapper">
              <div class="site__manage"></div>
            </div>
          </div>
          <div class="site__content">
            <div class="site__header">
              <span class="site__label">אתר הנצחה</span>
            </div>

            <div class="site__memorial">
              <div class="memorial__description">
                <div class="memorial__date">
                  <span class="memorial__label">נוצר בתאריך:</span>
                  <span class="memorial__value">12/05/2020</span>
                </div>
                <div class="memorial__subsription">
                  <span class="memorial__label">תכנית:</span>
                  <span class="memorial__value">מנוי חודשי 25 ₪ לחודש</span>
                </div>
              </div>

              <div class="memorial__control">
                <div class="btn btn__second btn-edit">
                  <span>עריכת האתר</span>
                </div>

                <div class="btn btn__second btn-preview">
                  <span>צפייה באתר</span>
                </div>

                <div class="btn btn__create btn-add">
                  <span class="plus plus-blue"></span>
                  <span>הוסף סיפור</span>
                </div>
              </div>
            </div>

            <div class="site__stories">
              <div class="stories__info">
                <div class="stories__control">
                  <div :class="['control__right', {'disabled': true || isDisabled('stories0')}]" @click.prevent="slideNext('stories0', true || ('stories0'))">
                    <span class="icon icon__arrow right carousel-arrow" @click.prevent="slideNext('stories0', true || isDisabled('stories0'))"></span>
                  </div>
                  <span :class="['separator', {'disabled': true}]"></span>
                  <div :class="['control__left', {'disabled': true || isDisabled('stories0')}]" @click.prevent="slidePrev('stories0', true || isDisabled('stories0'))">
                    <span class="icon icon__arrow carousel-arrow" @click.prevent="slidePrev('stories0', true || isDisabled('stories0'))"></span>
                  </div>
                </div>

                <div class="stories__label">
                  <div class="title">
                    <span class="text">סיפורים לאישור</span>
                    <span class="icon icon__info ask-icon"></span>
                  </div>
                  <div class="description">
                    <span class="text">סיפורים או תמונות וסרטונים שקרובים יצרו וצריכים לעבור את אישורך</span>
                  </div>

                </div>

                <div class="btn btn__second btn-add">
                  <span class="icon icon__add-blue add-icon"></span>
                  <span>הזמן קרובים</span>
                </div>
              </div>

              <div :class="['stories__items', {'notfound': true}]">
                <div
                  class="stories__item stories__notfound"
                  v-if="true"
                >
                  <span class="text">אין סיפורים חדשים</span>
                </div>

                <div
                  v-swiper:[`stories0`]="swiperOptions"
                  ref="stories0"
                  v-else
                >
                  <div class="swiper-wrapper">
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                    <div class="stories__item swiper-slide">
                      <div class="stories__created">
                        <span class="label">נשלח ב:</span>
                        <span class="date">12 בספטמבר 2020</span>
                      </div>
                      <div class="stories__content">
                        <div class="info">
                          <div class="story__person">
                            <img class="person__photo" src="~@/assets/img/shirli.png" alt="photo">
                            <div class="person__info">
                              <span class="name">דפי כהן</span>
                              <span class="company">חברה</span>
                            </div>
                          </div>

                          <div class="approval">
                            <div class="btn btn__primary approval__btn">
                              <span>לאישור</span>
                            </div>
                            <div class="approval__need"></div>
                          </div>
                        </div>

                        <div class="btn btn__label btn-relative">
                          <span class="icon icon__label-blue label-icon"></span>
                          <span>כללי</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./partials/Header";
  import { directive } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

  export default {
    name: "Index",
    components: {
      Header,
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          slidesPerView: 'auto',
          // loop: true,
        }
      };
    },
    methods: {
      slidePrev(storySlider, disabled) {
        if(!disabled) {
          this[storySlider].slidePrev();
        }
      },
      slideNext(storySlider, disabled) {
        if(!disabled) {
          this[storySlider].slideNext();
        }
      },
      slideChange(storySlider) {
        this.checkDisabled(storySlider);
      },
      isDisabled(storySlider) {
        let _this = this;

        setTimeout(() => {
          _this.checkDisabled(storySlider);
        }, 1000);
      },
      checkDisabled(storySlider) {
        let rtl = this.$ml.current === 'he';

        if(this[storySlider].isBeginning) {
          this.$refs[`${storySlider}-${rtl ? 'left' : 'right'}`].classList.add('disabled');
        } else {
          if(this.$refs[`${storySlider}-${rtl ? 'left' : 'right'}`].classList.contains('disabled')) {
            this.$refs[`${storySlider}-${rtl ? 'left' : 'right'}`].classList.remove('disabled');
          }
        }

        let isEnd = false;
        if(1 + this[storySlider].snapIndex === this[storySlider].slides.length) {
          isEnd = true;
        }

        if(isEnd) {
          this.$refs[`${storySlider}-${rtl ? 'right' : 'left'}`].classList.add('disabled');
        } else {
          if(this.$refs[`${storySlider}-${rtl ? 'right' : 'left'}`].classList.contains('disabled')) {
            this.$refs[`${storySlider}-${rtl ? 'right' : 'left'}`].classList.remove('disabled');
          }
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/pages/dashboard.scss";
</style>