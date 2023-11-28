import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotificaiton } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotificaiton as CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notification';
import { ReadNotificaitons } from '@application/use-cases/read-notifications';
import { UnreadNotificaitons } from '@application/use-cases/unread-notification';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotificaiton,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotification,
        ReadNotificaitons,
        UnreadNotificaitons,
    ],
})

export class HttpModule {}