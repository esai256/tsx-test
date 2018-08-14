import { Vue, Component, Prop } from 'vue-property-decorator';
import { IInputComponent } from './IInputComponent';

@Component
export default class TextComponent extends Vue implements IInputComponent<string> {
  @Prop({ default: '' }) value: string = '';

  render() {
    return (
      <input
        type="text"
        value={this.value}
        onInput={e => this.$emit('input', e.target.value)}
      />
    );
  }
}
