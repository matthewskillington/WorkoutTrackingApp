function LightThemeSpecifications() {
  this.MasterGrey100 = '#FFF',
  this.MasterGrey70 = '#CCC',
  this.MasterGrey50 = '#787878',
  this.MasterGrey0 = '#3d3d3d',
  this.PrimaryText = '#1E1C26',
  this.SecondaryText = '#595763',
  this.Success = '#24ab75',
  this.ModalBackground = this.MasterGrey100
}

function DarkThemeSpecifications() {
  this.MasterGrey100 = '#3d3d3d',
  this.MasterGrey70 = '#5c5c5c',
  this.MasterGrey50 = '#787878',
  this.MasterGrey0 = '#FFF',
  this.PrimaryText = '#F6F6F6',
  this.SecondaryText = '#bababa',
  this.Success = '#24ab75',
  this.ModalBackground = this.MasterGrey70
}

const LightTheme = new LightThemeSpecifications();
const DarkTheme = new DarkThemeSpecifications();

export {LightTheme, DarkTheme};
