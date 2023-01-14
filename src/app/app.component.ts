import {Component, OnDestroy, OnInit} from '@angular/core';
import { Key, KeyDAO } from '@irita/irita-sdk';

class IritaKeyDAO implements KeyDAO {
  async write(name: string, key: Key): Promise<void> {
    return;
  }

  // 目前address和privKey是写死的
  async read(name: string): Promise<Key> {
    return {
      address: '',
      privKey: '',
    };
  }

  async delete(name: string): Promise<void> {
  }
}

const iritaKeyDAO = new IritaKeyDAO();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
