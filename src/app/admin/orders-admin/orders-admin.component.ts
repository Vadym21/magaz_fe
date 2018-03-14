import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../communication-module/communication.service';
import {StoreModel} from '../../store/store.model';
import {HttpService} from '../../http.service';
import {Order} from '../../store/order.model';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css'],
  providers: [HttpService]
})

export class OrdersAdminComponent implements OnInit {
  orders: Order [] = [];
  choosenOrder: Order;

  constructor(private httpService: CommunicationService,
              private storeModel: StoreModel) {
    this.choosenOrder = null;
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.storeModel.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  choseOrder(order) {
    this.choosenOrder = order;
  }

  closeOrder() {
    this.choosenOrder = null;
  }

  deleteOrder(order) {
      console.log(order);
      this.httpService.deleteOrders(order).subscribe((data: any) => {
        console.log(data);
        this.orders = data.orders;
      });
  }
}