<script>
    import { messageText, messageStyle, showNotification } from "../routes/stores.js";
    function handleClose() {
        showNotification.set(false);
        messageText.set("");
        messageStyle.set("is-primary");
    }
</script>

{#if $showNotification}
<div class="notification {$messageStyle}">
    <button class="delete" on:click={handleClose}></button>
    {$messageText}
</div>
{/if}