<template>
    <div>
        <section class="card-info">
            <!-- full-card-->
            <div class="full-card">
                <!-- full-card__header -->
                <div class="full-card__header">
                    <div class="full-card__header-box">
                        <span class="full-card__link full-card__link--bigger" href="#">סא״ל יוסי קורקין</span>
                        <span class="full-card__link full-card__link--margin">סיפור חיים</span>
                        <span class="full-card__link">קרובים מספרים</span>
                    </div>
                    <div class="full-card__header-logo">
                        <img class="card__logo" src="~@/assets/img/icon/card-logo.svg" alt="Logo">
                    </div>
                </div>
                <img class="full-card__top-arrow" src="~@/assets/img/icon/card-arrow.svg" alt="">
                <div class="full-card__main">
                    <div class="full-card__name ">
                        <div>סא״ל יוסי</div>
                        קורקין
                        <span>(ז״ל)</span>
                    </div>
                    <div class="full-card__foto-years full-card__foto-years--mod">
                        1964 - 1997
                    </div>
                </div>
                <!-- full-card__footer -->
                <div class="full-card__footer">
                    <div class="full-card__footer-wrapper">
                        <div class="full-card__footer-small-foto">
                            <img src="~@/assets/img/card-small-foto.svg" alt="Foto">
                            <div class="full-card__footer-foto-caption">
                                <span>יעל בן חורין</span>
                                חברה
                            </div>
                        </div>

                        <div class="full-card__footer-left">
                            <div class="full-card__footer-quotes"><img src="~@/assets/img/icon/card-quotes.svg" alt="Quotes"></div>
                            <div class="full-card__footer-text">
                                איש הים, שחצה ימים והנהיג לבבות רבים בתושייה, בעוז-רוח ובאהבה. איש הים, שחצה ימים והנהיג לבבות רבים בתושייה, בעוז-רוח ובאהבה.
                            </div>
                        </div>
                    </div>
                    <button class="default-btn-plus full-card__footer-button"><img src="~@/assets/img/icon/blue-plus.svg" alt="">הוסף סיפור</button>
                </div>

            </div>
        </section>

        <!-- about-person -->
        <section class="about-person">
            <div class="about-person__container">
                <h3 class="about-person__name second-header">אודות יוסי קורקין</h3>
                <p class="about-person__info info-text">ליוסי היו תחומי התעניינות רבים. אהב לקרוא ספרים, נמשך לקולנוע, ועסק בענפי ספורט שונים ומגוונים. במהלך שהותו בדרום-אפריקה התוודע למשחק הראגבי ולגלישת גלים, שהפכו חלק בלתי-נפרד מחייו. יחד עם אחיו תומר הרבה לעסוק בשניהם. גם חיידק הטריאתלון דבק בו, והוא השתתף בתחרויות רבות. בנוסף לכל אלה נהג לנסוע בכל חורף עם משפחתו לחופשות סקי, בהן גלש על סנובורד.</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "MemorialsShow"
    }
</script>

<style lang="scss">
    @import "~@/assets/scss/pages/memorial-show.scss";
</style>