import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;

  beforeEach(() => {
    // Set up
    component = new TodoFormComponent(new FormBuilder());
  });

  it('create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    // Arrange
    const control = component.form.get('name');
    // Act
    control.setValue('');
    // Assert
    expect(control.valid).toBeFalsy();
  });
});
