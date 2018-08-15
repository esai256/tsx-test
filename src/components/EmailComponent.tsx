import { Vue, Component, Prop } from 'vue-property-decorator';
import IInputComponent from './IInputComponent';
import IValidatedInputComponent from './IValidatedInputComponent';
import './EmailComponent.scss';
import ILabeledComponent from './ILabeledComponent';

@Component
export default class EmailComponent
  extends Vue
  implements
  IInputComponent<string>,
  IValidatedInputComponent<string>,
  ILabeledComponent {
  @Prop({ default: '' }) value: string = '';
  @Prop({ default: '' }) errorMessage: string = '';
  @Prop({ default: false }) isValidationActive: boolean = false;
  @Prop({ default: '' }) label: string = '';

  get isValueValid(): boolean {
    return this.validationFunction(this.value);
  }

  validationFunction(value: string): boolean {
    return false;
  }

  render() {
    const classes: string[] = [];

    if (!this.isValueValid) {
      classes.push('invalid');
    }

    return (
      <div>

        <label>{this.label}</label>

        <input
          class={classes.join(' ')}
          type="email"
          value={this.value}
          onInput={e => this.$emit('input', e.target.value)}
        />

        {
          this.isValidationActive
          && this.isValueValid
          && <span>{this.errorMessage}</span>
        }

      </div>
    );
  }
}
