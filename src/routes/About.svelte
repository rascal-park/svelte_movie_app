<script>
  import { querystring } from 'svelte-spa-router'
  import qs from 'qs'

  $: query = qs.parse($querystring)
  $: name = query.name || 'jhPark'
  $: email = query.email || 'wogud772@gmail.com'
  $: blog = query.blog || 'https://devinn.dev/challengers/'
  $: phone = query.phone || '+82-10-9949-8037'
  $: image = query.image || 'data:image/png;base64,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'
</script>

<div class="user-profile">
  <div class="photos">
    <div class="photo">
      <img src="/assets/svelte.png" alt="User">
    </div>
    <div class="photo">
      <img src={image} alt="User">
    </div>
  </div>
  <div class="details">
    <div class="name">{name}</div>
    <div class="email">{email}</div>
    <div class="blog">{blog}</div>
    <div class="phone">{phone}</div>
  </div>
</div>

<style lang="scss">
  .user-profile {
    padding: 80px 0;
    .photos {
      display: flex;
      justify-content: center;
      .photo {
        flex-shrink: 0;
        width: 230px;
        height: 230px;
        padding: 30px;
        box-sizing: border-box;
        background-color: $color--area;
        border-radius: 50%;
        border: 12px solid $color--black;
        &:first-child {
          margin-right: -80px;
        }
        img {
          width: 100%;
        }
      }
    }
    .details {
      margin-top: 20px;
      text-align: center;
      .name {
        font-size: 40px;
        font-family: 'Oswald', sans-serif;
        margin-bottom: 20px;
      }
    }
  }
</style>
