import { DiscordBotListComConfig } from '../../models/config-models';
import { HttpService } from '../http-service';
import { BotSite } from './bot-site';

export class DiscordBotListComSite implements BotSite {
    public enabled = false;
    public name = 'discordbotlist.com';

    constructor(private config: DiscordBotListComConfig, private httpService: HttpService) {
        this.enabled = this.config.enabled;
    }

    public async updateServerCount(serverCount: number): Promise<void> {
        let res = await this.httpService.post(this.config.url, this.config.token, {
            guilds: serverCount,
        });

        if (!res.ok) {
            throw res;
        }
    }
}
