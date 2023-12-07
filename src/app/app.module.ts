import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { SecciontarjetaComponent } from './components/secciontarjeta/secciontarjeta.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { SeccionBalanceComponent } from './components/seccion-balance/seccion-balance.component';
import { BalanceComponent } from './components/balance/balance.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { SeccionTablaComponent } from './components/seccion-tabla/seccion-tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PerfilComponent,
    BuscadorComponent,
    NavBarComponent,
    DropdownComponent,
    SideBarComponent,
    SaludoComponent,
    SecciontarjetaComponent,
    CreditCardComponent,
    IngresosComponent,
    EgresosComponent,
    SeccionBalanceComponent,
    BalanceComponent,
    TablaComponent,
    SeccionTablaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
