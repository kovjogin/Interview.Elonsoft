<template>
  <div>
    <MessagesList />
    <ChatInput />
  </div>
</template>

<script>
  import ChatInput from './ChatInput';
  import MessagesList from '@/components/message/Messages';

  export default {
    name: 'Chat',
    components: {
      ChatInput,
      MessagesList
    }
  };
</script>