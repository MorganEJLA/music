import { Howl } from 'howler'
import { defineStore } from 'pinia'

export default defineStore('player', {
  state: () => ({
    current_song: {}
  }),
  actions: {
    async newSong(song) {
      this.current_song = song

      this.sound = new Howl({
        src: [song.url],
        html5: true
      })

      this.sound.play()
    }
  }
})
