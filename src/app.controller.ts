import 'cross-fetch/polyfill';
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { message: this.appService.getHello()};
  }

  @Get('us')
  @Render('us')
  async listUs() {
    const client = new ApolloClient({ uri: 'http://localhost:3000/graphql' });
    const usersData = await client.query({
      query: gql`
        query getUsers {
          users {
            id
            name
          }
        }
      `,
    })/*
      .then(result => result.data.users)
      .catch(error => console.error(error))*/;
    return { users: usersData.data.users };
  }

  //npm i apollo-client apollo-link-http apollo-cache-inmemory graphql-tag

  // npm i apollo-boost

}
