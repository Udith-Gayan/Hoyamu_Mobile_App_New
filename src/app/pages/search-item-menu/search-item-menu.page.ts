import { IItemRows } from 'src/app/common/interfaces/rowItem';
import { Component, OnInit } from '@angular/core';
import { PageRouterService } from 'src/app/services/page-router.service';

@Component({
  selector: 'app-search-item-menu',
  templateUrl: './search-item-menu.page.html',
  styleUrls: ['./search-item-menu.page.scss'],
})
export class SearchItemMenuPage implements OnInit {

  constructor(private pageRouter: PageRouterService) { }

  rowList: IItemRows[] = [
    { items: [
      {imgUrl: 'assets\\item_icons\\id.png',
       routePath: 'add/nic',
       text: 'NIC',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\licence.png',
       routePath: 'add/nic',
       text: 'Driving Licences',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\passport3.png',
       routePath: 'add/nic',
       text: 'Passport',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\nic.png',
       routePath: 'add/nic',
       text: 'Other ID',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\paper.png',
       routePath: 'add/nic',
       text: 'Papers & Documents',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\bag.png',
       routePath: 'add/nic',
       text: 'Bag',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\wallet.png',
       routePath: 'add/nic',
       text: 'Wallet',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\creditcard.png',
       routePath: 'add/nic',
       text: 'Bank Cards',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\mobile.png',
       routePath: 'add/nic',
       text: 'Mobile Phone',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\laptop.png',
       routePath: 'add/nic',
       text: 'Laptops & Related Devices',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\watch.png',
       routePath: 'add/nic',
       text: 'Watches',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\electronic.png',
       routePath: 'add/nic',
       text: 'Electrical & Electronic Appliances',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\jewelry.png',
       routePath: 'add/nic',
       text: 'Jewellery',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\garments.png',
       routePath: 'add/nic',
       text: 'Garments',
       isShow: true
      }
    ]},
    { items: [
      {imgUrl: 'assets\\item_icons\\money.png',
       routePath: 'add/nic',
       text: 'Cash',
       isShow: true
      },
      {imgUrl: 'assets\\item_icons\\other.png',
       routePath: 'add/nic',
       text: 'Other',
       isShow: true
      }
    ]}
  ];

  ngOnInit() {
  }

  onItemClick(path: string) {
    this.pageRouter.goTo(path);
  }

}
