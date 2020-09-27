import { mapState, mapMutations } from 'vuex';
import {
  SET_CHECK_OBJECT,
  SET_DATA_OBJECT,
  SET_STATE
} from '../../store/types';
import updateStatus from './updateStatus'; // 自定义初始化功能，可以修改

const mixin = {
  mixins: [updateStatus],
  computed: {
    ...mapState({ 
      dataObject: state => state.dataObject,
      checkObject: state => state.checkObject,
    })
  },
  mounted() {
    this.setCheckObject(this.dataObject);
    this.setState(['ableSend', true]);
  },
  methods: {
    ...mapMutations({
      setCheckObject: SET_CHECK_OBJECT,
      setDataObject: SET_DATA_OBJECT,
      setState: SET_STATE
    }),
  },
};

export default mixin;
