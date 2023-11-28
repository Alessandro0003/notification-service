import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface UnreadNotificationsRequest{ 
  notificationId: string;
}

type UnreadNotificationsResponse = void;

@Injectable()
export class UnreadNotificaitons {
  constructor(private notificationsRepository: NotificationsRepository) {}
  
  async execute(
    request: UnreadNotificationsRequest,
    ): Promise<UnreadNotificationsResponse> {

    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if(!notification) {
      throw new NotificationNotFound();
    }


    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}