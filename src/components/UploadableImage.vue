<template>
    <div>
        <img :src="userImage"
             :alt="alt"
             ref="uploadImage"
             :class="classes" />

        <vue-dropzone
                id="dropzone"
                ref="dropzone"
                :options="settings"
                :preview-template="template()"
                :include-styling="false"
                :useCustomSlot="true"
                v-on:vdropzone-thumbnail="thumbnail"
        >
            <div class="columns">
                <div class="column">
                    <div class="file is-boxed">
                        <label class="file-label">
                  <span class="file-cta has-text-centered">
                    <span class="file-icon">
                      <i class="mdi mdi-upload"></i>
                    </span>
                    <span class="file-label">
                    </span>
                  </span>
                        </label>
                    </div>
                </div>
            </div>
        </vue-dropzone>

    </div>
</template>

<script>
    import vueDropzone from "vue2-dropzone"
    // import { mapGetters } from "vuex";

    export default {
        name: "UploadableImage",

        props: [
            'imageWidth',
            'imageHeight',
            'location',
            'classes',
            'alt'
        ],

        components: {
            vueDropzone
        },

        data: () => {
          return {
              dropzone: null,
              userImage: require('@/assets/img/icon/photo-input.svg')
          }
        },

        methods: {
            template: function () {
                var tpl = `<div class="columns dz-preview dz-file-preview">
                  <div class="column is-narrow dz-image">
                      <div data-dz-thumbnail-bg></div>
                  </div>`;

                tpl += `
                  <div class="column">
                    <a href="#" data-dz-link><span data-dz-name></span></a>
                  </div>
                  <div class="column is-narrow">
                    <small data-dz-size></small>
                  </div>
                  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                  <div class="dz-error-message"><span data-dz-errormessage></span></div>
                  <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                  <div class="dz-error-mark"><i class="fa fa-close"></i></div>
                  `;

                    tpl += `<div class="column is-narrow">
                        <a class="button is-small" data-dz-remove>удалить</a>
                      </div>`;

                tpl += '</div>';

                return tpl;
            },
            thumbnail: function(file, dataUrl) {
                this.userImage = dataUrl;
            }
        },

        mounted() {
            // if(this.authUser.data.user_id.toString() === this.$route.params.userId) {
            //     this.dropzone = new Dropzone(this.$refs.uploadImage, this.settings);
            // }
        },

        computed: {
            settings() {
                return {
                    paramName: 'image',
                    url: '/api/user-images',
                    acceptedFiles: 'image/*',
                    autoProcessQueue: false,
                    addRemoveLinks: true,
                    params: {
                        'type': this.image,
                    },
                    previewTemplate: this.template(),
                    thumbnail: this.thumbnail,
                    headers: {
                        // 'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                    },
                    success: (e, res) => {
                        console.log(e, res);
                        // this.$store.dispatch('fetchAuthUser');
                        // this.$store.dispatch('fetchUser', this.$route.params.userId);
                        // this.$store.dispatch('fetchUserPosts', this.$route.params.userId);
                    }
                };
            },
            // ...mapGetters({
            //     authUser: 'authUser'
            // })
        }
    }
</script>

<style scoped>

</style>
