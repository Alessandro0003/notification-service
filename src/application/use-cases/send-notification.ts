import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendNotificationRequest{ 
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificaitonResponse{ 
  notification: Notification;
}

@Injectable()
export class SendNotificaiton {
  constructor(private notificationsRepository: NotificationsRepository) {}
  
  async execute(
    request: SendNotificationRequest,
    ): Promise<SendNotificaitonResponse> {

    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}